import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import classes from './styles.module.less';
import Transition from './Transition';
import usePageInit from './usePageInit';
import UIRouteContext from './UIRouteContext';
import useRouterContext from './useRouterContext';
import capitalize from '@wonder-ui/utils/capitalize';

function getMilliseconds(type){
  if(!type) return 0;
  const key = 'duration' + capitalize(type);
  return classes[key] ? Number(classes[key].replace('ms', '')): 0;
}

const RouteComp = React.memo(function RouteComp(props) {
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
      return React.lazy(async)
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
      const _name = typeof name === 'function' ? name(routeProps.match, routerStore.location) : name;
      onRouteChange(routeProps.match, routerStore.location, _name);
    }
  })

  if(async){
    return (
      <React.Suspense fallback={fallback}>
        <Component {...routeProps} routerStore={routerStore} />
      </React.Suspense>
    )
  }

  return (
    <Component {...routeProps} routerStore={routerStore} />
  );
}, (prevProps, nextProps)=>{
  if(prevProps.current && prevProps.current != nextProps.current){
    return true;
  }
});

/**
 * 
 * @visibleName AnimatedRoute
 */
const AnimationRoute = React.forwardRef(function AnimationRoute(props, ref) {
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
  const [animationType, setAnimation] = React.useState(null);
  const timeout = React.useMemo(()=>getMilliseconds(animationType), [animationType]);

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
              className={classes.route}
              timeout={timeout}
              unmountOnExit={!match}
              action={history.action}
            >
              <div ref={ref} className={classes.route}>
                <RouteComp
                  component={component}
                  fallback={fallback}
                  redirect={redirect}
                  async={async}
                  query={routing.location.query}
                  current={visible}
                  name={name}
                  {...routeProps}
                />
              </div>
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