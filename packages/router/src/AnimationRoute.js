import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Transition from './Transition';
import { RouteWrapper, duration } from './styles';
import usePageInit from './usePageInit';
import UIRouteContext from './UIRouteContext';
import useRouterContext from './useRouterContext';

const RouteComp = (props)=>{
  const {
    async,
    fallback = null,
    redirect,
    component,
    shouldUpdate,
    name,
    ...routeProps
  } = props;
  const { onRouteChange, routerStore } = useRouterContext();
  const Component = React.useMemo(()=>{
    if(typeof async === 'function') return React.lazy(async);
    if(typeof redirect === 'string') return () => <Redirect to={redirect}/>;
    if(component) return component.default || component;
  }, [async, component, redirect]);

  const rendered = React.useRef(null);
  const [, forceUpdate] = React.useState();

  React.useEffect(()=>{
    if(shouldUpdate){
      rendered.current = <Component {...routeProps} routerStore={routerStore} />;
      forceUpdate(Date.now())
    }
  }, [shouldUpdate, component]);

  usePageInit(()=>{
    if(onRouteChange){
      const _name = typeof name === 'function' ? name(routeProps.match, routerStore.location) : name;
      onRouteChange(routeProps.match, routerStore.location, _name);
    }
  })

  if(async){
    return (
      <React.Suspense fallback={fallback}>
        {rendered.current}
      </React.Suspense>
    )
  }

  return rendered.current;
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
    name,
    ...rest
  } = props;

  const { routerStore: routing } = useRouterContext();
  const [animationType, setAnimation] = React.useState('null');
  const timeout = duration[animationType] || 0;

  React.useEffect(()=>{
    setTimeout(() => setAnimation(animation), 0);
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

          const content = (
            <RouteWrapper 
              className={className} 
              style={style} 
              ref={ref}
              data-url={match && match.url}
            >
              <RouteComp
                component={component}
                fallback={fallback}
                redirect={redirect}
                async={async}
                query={routing.location.query}
                shouldUpdate={visible}
                name={name}
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