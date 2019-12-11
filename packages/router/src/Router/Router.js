import React from 'react';
import PropTypes from 'prop-types';
import RouterStore from '../RouterStore';
import ReactRouter from './ReactRouter';
import AnimationRoutes from '../AnimationRoutes';
import SyncRouterStore from './SyncRouterStore';
import { widthStyles } from '@wonder-ui/styles';

const noop = ()=>{};
/**
 * Wrap ReactRouter
 */
const Router = widthStyles({
  '@global': {
   'html, body, #root': {
      height: '100%',
      width: '100%',
      margin: 0,
      padding: 0
    }
  },
  root: {
    height: '100%',
    width: '100%',
    position: 'relative',
    overflow: 'hidden'
  }
}, { name: 'Router' })
(React.forwardRef(function Router(props, ref) {
  const { 
    classes,
    children,
    type,
    routes = [],
    routerStore = new RouterStore(),
    animation,
    animationDisalbed,
    onRouteChange = noop,
    ...rest
  } = props;

  return (
    <ReactRouter type={type} {...rest}>
      <SyncRouterStore value={{routerStore, onRouteChange}}>
        <div className={classes.root} ref={ref}>
          {routes.length > 0 && (
            <AnimationRoutes 
              dataSource={routes} 
              animation={animation} 
              animationDisalbed={animationDisalbed}  
              noMatch={noMatch} 
            />
          )}
          {children}
        </div>
      </SyncRouterStore>
    </ReactRouter>
  )
}))


Router.defaultProps = {
  type: 'hash',
  routes: [],
  animation: 'slide'
}

Router.propTypes = {
  /**
   * 路由类型
   */
  type: PropTypes.oneOf(['browser', 'memory', 'hash']),
  /**
   * 路由改变时候出发回调
   */
  onRouteChange: PropTypes.func,
  /**
   * 禁用动画
   */
  animationDisalbed: PropTypes.func,
  /**
   * Animation type
   */
  animation: PropTypes.oneOf(['slide', 'fade', 'scale']),
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
      component: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.func
      ]),
      /** 
       * 异步加载, 需要配合webpack import 使用
       * ()=>import('~/pages/some/index')
       */
      async: PropTypes.func,
      /** 嵌套路由 仅支持2级 */
      routes: PropTypes.array,
      /**
       * 入口重定向
       */
      redirect: PropTypes.string,
      /**
       * route name
       */
      name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
      ])
    })
  )
}

export default Router;

