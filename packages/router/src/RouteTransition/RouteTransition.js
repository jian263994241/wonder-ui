import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { styles, duration } from './styles';
import withStyles from 'react-jss';
import Transition from './Transition';

/**
 *
 * @visibleName AnimatedRoute
 */
const RouteTransition = React.forwardRef(function RouteTransition(props, ref) {
  const {
    classes,
    element,
    animation = 'slide',
    animationDisabled,
    className,
    style,
    fallback,
    ...rest
  } = props;

  const [animationType, setAnimation] = React.useState('none');
  const timeout = duration[animationType] || 0;

  React.useLayoutEffect(() => {
    setTimeout(() => setAnimation(animationDisabled ? 'none' : animation), 0);
  }, [animation]);

  return (
    <Route {...rest}>
      {(routeProps) => {
        const { match, history } = routeProps;
        const visible = !!match && match.isExact;

        return (
          <Transition
            in={visible}
            classNames={animationType}
            className={classes.root}
            style={style}
            timeout={timeout}
            unmountOnExit={!match}
            action={history.action}
          >
            {React.createElement(element, { fallback, ref })}
          </Transition>
        );
      }}
    </Route>
  );
});

RouteTransition.propTypes = {
  /**
   * 一个 React 元素类型
   */
  element: PropTypes.elementType,
  /**
   * Animation type
   */
  animation: PropTypes.oneOf(['slide', 'fade', 'scale']),

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
   * component
   */
  component: PropTypes.func,
};

RouteTransition.displayName = 'RouteTransition';

export default withStyles(styles)(RouteTransition);
