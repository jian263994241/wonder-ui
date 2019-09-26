import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Transition from './Transition';
import { RouteWrapper, duration } from './styles';

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
    ...rest
  } = props;

  const Component = React.useMemo(()=>{
    if(typeof async === 'function') return React.lazy(async);
    if(typeof redirect === 'string') return () => <Redirect to={redirect}/>;
    if(component) return component.default || component;
  }, [async, component]);

  const [animationType, setAnimation] = React.useState('null');
  const timeout = duration[animation] || 0;

  React.useEffect(()=>{
    setTimeout(() => setAnimation(animation), 0);
  }, [animation]);

  return (
    <Route {...rest}>
      {(routeProps)=>{
        const { match, history } = routeProps;
        const visible = !!match && match.isExact;
        const isForward = history.action === 'PUSH';
 
        const content = (
          <RouteWrapper className={className} style={style} ref={ref}>
            {
              async != undefined ? (
                <React.Suspense fallback={fallback}>
                  <Component {...routeProps}/>
                </React.Suspense>
              ): (
                <Component {...routeProps}/>
              )
            }
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
            className={isForward ? 'forward': 'backward'}
          >
            {content}
          </Transition>
        )
      }}
    </Route>
  );
});

AnimationRoute.propTypes = {
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
  ...Route.propTypes
}


export default AnimationRoute;