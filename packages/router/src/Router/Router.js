import React from 'react';
import PropTypes from 'prop-types';
import RouterStore from '../RouterStore';
import { BrowserRouter, HashRouter, MemoryRouter, Router as RcRouter } from 'react-router-dom';
import { GlobalStyles, RouterRoot } from './styles';
import { RouterProvider } from '../Context';
import useRouterContext from '../useRouterContext';
import AnimationRoutes from '../AnimationRoutes';

const Store = (props)=>{
  const {routerStore, history, location} = useRouterContext();
  
  React.useEffect(()=>{
    if(routerStore.__initial){
      routerStore.__initial(history);
    }
  }, [routerStore]);

  if(routerStore.__updateLocation){
    routerStore.__updateLocation(location);
  }

  return props.children;
};

/**
 * Wrap ReactRouter
 */
const Router = React.forwardRef((props, ref)=>{
  const { 
    children,
    type,
    routes = [],
    routerStore = new RouterStore(),
    animation,
    animationDisalbed,
    onRouteChange,
    ...rest
  } = props;

  const RouterComp = React.useMemo(()=>{
    if(type === 'hash') return HashRouter;
    if(type === 'browser') return BrowserRouter;
    if(type === 'memory') return MemoryRouter;
    return RcRouter;
  }, [type]);

  return (
    <RouterComp {...rest}>
      <RouterProvider value={{routerStore, onRouteChange}}>
        <Store>
          <GlobalStyles />
          <RouterRoot ref={ref}>
            {
              routes.length > 0 ? (
                <AnimationRoutes 
                  dataSource={routes} 
                  animation={animation} 
                  animationDisalbed={animationDisalbed}  
                  noMatch={noMatch} 
                />
              ): children
            }
          </RouterRoot>
        </Store>
      </RouterProvider>
    </RouterComp>
  )
})


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

