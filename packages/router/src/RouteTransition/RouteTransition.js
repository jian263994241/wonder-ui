import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { styles, duration } from './styles';
import clsx from 'clsx';
import Transition from './Transition';
import UIRouteContext from '../UIRouteContext';
import useComponent from './useComponent';
import useEnhancedEffect from '@wonder-ui/utils/useEnhancedEffect';
import usePageInit from '../usePageInit';
import useRouterContext from '../useRouterContext';
import withStyles from '@wonder-ui/styles/withStyles';

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

  const Component = useComponent({ async, fallback, component, redirect });

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
const RouteTransition = React.forwardRef(function RouteTransition(props, ref) {
  const {
    component,
    classes,
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
  const [animationType, setAnimation] = React.useState('none');
  const timeout = duration[animationType] || 0;

  useEnhancedEffect(()=>{
    setTimeout(() => setAnimation(animationDisabled ? 'none': animation), 0);
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
              className={classes.root}
              timeout={timeout}
              unmountOnExit={!match}
              action={history.action}
            >
              <div
                className={clsx(classes.root, className)} 
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
              </div>
            </Transition>
          )
        }}
      </Route>
    </UIRouteContext.Provider>
  );
});

RouteTransition.propTypes = {
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

RouteTransition.displayName = 'RouteTransition';

export default withStyles(styles)(RouteTransition);