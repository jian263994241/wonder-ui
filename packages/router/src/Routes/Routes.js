import React from 'react';
import PropTypes from 'prop-types';
import { matchPath, useRouteMatch, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import Route from '../RouteTransition';
import styles from './styles';
import { withStyles } from '@wonder-ui/styles';
import { useLocation } from '../hooks';
import { addQuery, createRoutesFromArray } from '../utils';

const Routes = React.forwardRef(function Routes(props, ref) {
  const {
    routes = [],
    animation,
    animationDisabled,
    fallback,
    classes,
    className,
    style,
    noMatch,
    onRouteChange,
  } = props;
  const history = useHistory();
  const location = useLocation();
  const context_match = useRouteMatch();

  React.useLayoutEffect(() => {
    if (onRouteChange) {
      onRouteChange(location, location.action);

      history.listen((location, action) => {
        addQuery(location);
        onRouteChange(location, action);
      });
    }
  }, [history]);

  const routeList = React.useMemo(() => createRoutesFromArray(routes), [
    routes,
  ]);

  const matched = React.useMemo(() => {
    let match;
    routeList.forEach((child) => {
      const path = child.path || child.from;

      const _match = path
        ? matchPath(location.pathname, { ...child, path })
        : context_match;

      if (_match && _match.isExact) {
        match = _match;
      }
    });
    return match;
  }, [routeList, location]);

  return (
    <div className={clsx(classes.root, className)} style={style} ref={ref}>
      {routeList.map((routeConf, index) => (
        <Route
          key={index}
          animation={animation}
          animationDisabled={animationDisabled}
          fallback={fallback}
          {...routeConf}
        />
      ))}
      {!matched && noMatch}
    </div>
  );
});

Routes.propTypes = {
  /**
   * Animation type
   */
  animation: PropTypes.oneOf(['slide', 'fade', 'scale']),
  /**
   * Disable animation
   */
  animationDisabled: PropTypes.bool,

  /**
   * 路由
   */
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * 路径
       */
      path: PropTypes.string,
      /**
       * 是否准确匹配
       */
      exact: PropTypes.bool,
      /**
       * 页面组件
       * require('~/pages/some/index'),
       */
      component: PropTypes.elementType,
      /**
       * 页面组件
       * require('~/pages/some/index'),
       */
      element: PropTypes.node,
      /**
       * 异步加载, 需要配合webpack import 使用
       * ()=>import('~/pages/some/index')
       */
      async: PropTypes.func,

      /** 嵌套路由 仅支持2级 */
      children: PropTypes.array,
    }),
  ).isRequired,
  /**
   * 404
   */
  noMatch: PropTypes.node,
  /**
   * Trigger event on route change
   */
  onRouteChange: PropTypes.func,
};

Routes.displayName = 'Routes';

export default withStyles(styles)(Routes);
