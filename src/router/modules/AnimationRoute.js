import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Transition from './Transition';
import { RouteWrapper, duration } from './styles';
import RouterStore from './RouterStore';


const RouteComp = (props)=>{
  const {
    async,
    fallback = null,
    redirect,
    component,
    shouldUpdate,
    ...routeProps
  } = props;

  const Component = React.useMemo(()=>{
    if(typeof async === 'function') return React.lazy(async);
    if(typeof redirect === 'string') return () => <Redirect to={redirect}/>;
    if(component) return component.default || component;
  }, [async, component, redirect]);

  const [content, setContent] = React.useState(null);

  const {location} = routeProps;

  function rendered(){
    if(async != undefined){
      setContent(
        <React.Suspense fallback={fallback}>
          <Component {...routeProps} />
        </React.Suspense>
      )
    }else{
      setContent(
        <Component {...routeProps}/>
      )
    }
  }
  
  React.useEffect(()=>{
    if(shouldUpdate){
      rendered();
    }  
  }, [location, shouldUpdate]);

  return content;
};

/**
 * 
 * @visibleName AnimatedRoute
 */
const AnimationRoute = React.forwardRef((props, ref)=>{
  const {
    component,
    animation = 'slide',
    animationDisabled,
    className,
    style,
    async,
    fallback = null,
    redirect,
    disabled,
    ...rest
  } = props;

  const routing = React.useContext(RouterStore.Context);
  const [animationType, setAnimation] = React.useState('null');
  const timeout = duration[animationType] || 0;

  React.useEffect(()=>{
    setTimeout(() => setAnimation(animation), 0);
  }, [animation]);

  if(disabled){
    return null;
  }

  return (
    <Route {...rest}>
      {(routeProps)=>{
        const { match, history } = routeProps;
        const visible = !!match && match.isExact;
   
        const content = (
          <RouteWrapper className={className} style={style} ref={ref}>
            <RouteComp
              component={component}
              fallback={fallback}
              redirect={redirect}
              async={async}
              query={routing.location.query}
              shouldUpdate={visible}
              {...routeProps}
            />
          </RouteWrapper>
        );

        if(animationDisabled){
          return visible ? content : null;
        }

        return (
          <Transition
            in={visible}
            classNames={animationType}
            timeout={timeout}
            unmountOnExit={!match}
            action={history.action}
          >
            {content}
          </Transition>
        )
      }}
    </Route>
  );
});

AnimationRoute.propTypes = {
  ...Route.propTypes,
  /**
   * Animation type
   */
  animation: PropTypes.oneOf(['slide', 'fade', 'scale']),
  /**
   * Redirect url
   */
  redirect: PropTypes.string,
  /**
   * Async load component
   */
  async: PropTypes.func,
  /**
   * Add classes to root element
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Add styles to root element
   * @ignore
   */
  style: PropTypes.object,
  /**
   * React.Suspense
   */
  fallback: PropTypes.any,
  /**
   * Disable animation
   */
  animationDisabled: PropTypes.bool,
  /**
   * Disable route
   */
  disabled: PropTypes.bool,
  /**
   * component
   */
  component: (props, propName)=>{
    const propsCopy = Object.assign({}, props);
    if(props[propName]){
      if(props[propName].default){
        propsCopy[propName] = props[propName].default
      }
      return Route.propTypes.component(propsCopy, propName);
    }
  }
}

export default AnimationRoute;