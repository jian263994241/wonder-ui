import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Transition from './Transition';
import { duration, styles } from './styles';
import UIRouteContext from '../UIRouteContext';
import useRouterContext from '../useRouterContext';
import RouteContent from './RouteContent';
import { widthStyles } from '@wonder-ui/styles';

/**
 * 
 * @visibleName AnimatedRoute
 */
const RouteTransition = widthStyles(styles, { name: 'RouteTransition' })
(React.forwardRef(function RouteTransition(props, ref) {
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
    classes,
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
              className={classes.root}
              timeout={timeout}
              unmountOnExit={!match}
              action={history.action}
            >
              <div 
                className={classes.root}
                style={style}
                ref={ref}
                data-url={match && match.url}
              >
                <RouteContent
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
}));

Route.propTypes = {
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

export default RouteTransition;