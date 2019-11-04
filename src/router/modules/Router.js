import React from 'react';
import PropTypes from 'prop-types';
import flatMap from 'array.prototype.flatmap';
import RouterStore from './RouterStore';

import { 
  __RouterContext,
  BrowserRouter, 
  HashRouter, 
  MemoryRouter, 
  Router as RcRouter
} from 'react-router-dom';
import { GlobalStyles, RouterWrapper } from './styles';
import AnimationRoutes from './AnimationRoutes';

const Store = (props)=>{
  const { 
    children,
    routerStore = new RouterStore(),
  } = props;

  const routerContext = React.useContext(__RouterContext);
  const Provider = RouterStore.Context.Provider;

  React.useEffect(()=>{
    if(routerStore.__initial){
      routerStore.__initial(routerContext.history);
    }
  }, [routerStore]);

  React.useEffect(() => {
    if(routerStore.__updateLocation){
      routerStore.__updateLocation(routerContext.location);
    }
  }, [routerContext.location]); 

  return (
    <Provider value={routerStore}>
      {children}
    </Provider>
  )
};

Store.propTypes = {
  routerStore: PropTypes.instanceOf(RouterStore)
};

/**
 * Wrap ReactRouter
 */
const Router = React.forwardRef((props, ref)=>{
  const { 
    children,
    type,
    routes,
    routerStore,
    animation,
    animationDisalbed,
    ...rest
  } = props;

  const [routeList, setRoute] = React.useState([]);
  const RouterComp = React.useMemo(()=>{
    if(type === 'hash') return HashRouter;
    if(type === 'browser') return BrowserRouter;
    if(type === 'memory') return MemoryRouter;
    return RcRouter;
  }, [type]);

  const renderRoutes = (routes)=>{  
    return flatMap(routes, (route, index)=>{
      const { children, ...routeConf } = route;
      if(children){
        children.forEach((child)=>{
          if(routeConf.path && child.path){ 
            child.path = resolve(routeConf.path, child.path);
          }
        })
        return renderRoutes([routeConf, ...children]);
      }
      return routeConf;
    })
  };

  React.useEffect(()=>{
    if(routes){
      const result = renderRoutes(routes);
      setRoute(result);   
    }
  }, [routes]);
 
  return (
    <RouterComp {...rest}>
      <Store routerStore={routerStore}>
        <GlobalStyles />
        <RouterWrapper ref={ref}>
          {
            routeList.length > 0 ? (
              <AnimationRoutes 
                dataSource={routeList} 
                animation={animation} 
                animationDisalbed={animationDisalbed}  
                noMatch={noMatch} 
              />
            ): children
          }
        </RouterWrapper>
      </Store>
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
      redirect: PropTypes.string
    })
  )
}

export default Router;

