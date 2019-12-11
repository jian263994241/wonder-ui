import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import loadable from "@loadable/component";
import Transition from './Transition';
import { RouteWrapper, duration } from './styles';
import usePageInit from './usePageInit';
import UIRouteContext from './UIRouteContext';
import useRouterContext from './useRouterContext';

function timeout(callback, time){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(callback());
    }, time);
  })
}

const RouteComponent = React.memo(function RouteComponent(props) {
  const {
    async,
    fallback = null,
    redirect,
    component,
    current,
    name,
    ...routeProps
  } = props;
  const { onRouteChange, routerStore } = useRouterContext();
  const Component = React.useMemo(()=>{
    if(typeof async === 'function') {
      return loadable(()=> timeout(async, 0), {fallback})
    }else if(typeof redirect === 'string') {
      return function RedirectTo() {
        return <Redirect to={redirect}/>;
      }
    }else if(component) {
      return component.default || component;
    };
  }, [ async, component, redirect ]);

  usePageInit(()=>{
    if(onRouteChange){
      const _name = typeof name === 'function' 
        ? name(routeProps.match, routerStore.location) : name;
      onRouteChange(routeProps.match, routerStore.location, _name);
    }
  })

  return (
    <Component {...routeProps} routerStore={routerStore} />
  );
}, function shouldUpdate(prevProps, nextProps) {
  if(prevProps.current && prevProps.current != nextProps.current){
    return true;
  }
});

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
    name,
    ...rest
  } = props;

  const { routerStore: routing } = useRouterContext();
  const [animationType, setAnimation] = React.useState('null');
  const timeout = duration[animationType] || 0;

  React.useEffect(()=>{
    setTimeout(() => setAnimation(animationDisabled ? null: animation), 0);
  }, [animation]);

  if(disabled){
    return null;
  }

  return (
    <UIRouteContext.Provider value={{animationType, timeout}}>
      <Route {...rest}>
        {(routeProps)=>{
          const { match, history } = routeProps;
          const visible = !!match && match.isExact;

          return (
            <Transition
              in={visible}
              classNames={animationType}
              timeout={timeout}
              unmountOnExit={!match}
              action={history.action}
            >
              <RouteWrapper 
                className={className} 
                style={style}
                ref={ref}
                data-url={match && match.url}
              >
                <RouteComponent
                  component={component}
                  fallback={fallback}
                  redirect={redirect}
                  async={async}
                  query={routing.location.query}
                  current={visible}
                  name={name}
                  {...routeProps}
                />
              </RouteWrapper>
            </Transition>
          )
        }}
      </Route>
    </UIRouteContext.Provider>
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