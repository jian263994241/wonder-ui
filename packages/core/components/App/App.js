import React from 'react';
import PropTypes from 'prop-types';
import { Router, RouterStore } from '@wonder-ui/router';
import { ThemeProvider } from '../styles/theming';
import AppClass from '../AppClass';
import AppContext from './AppContext';
import useEventCallback from '@wonder-ui/utils/useEventCallback';


/**
 * 创建一个App上下文.
 * @visibleName App 
 */
const App = React.forwardRef((props, ref) => {
  const {
    app: appInput,
    children,
    classes,
    on,
    routerStore: routerStoreInput,
    routes,
    theme: themeInput = {},
    type,
    ...rest
  } = props;

  const app = React.useMemo(()=> {
    const appParams = { on };
    const _app = appInput || new AppClass(appParams);
    _app.routes = routes;
    return _app;
  }, [on, routes]);

  app.routing = React.useMemo(()=> routerStoreInput || new RouterStore(), [routerStoreInput]);
  
  React.useEffect(()=>{
    app.emit('init');
    return ()=>{
      app.emit('destroy');
    }
  }, []);

  const handleRouteChange = useEventCallback((mached, location, name)=>{
    app.emit('routeChange', mached, location, name);
  });

  return (
    <ThemeProvider theme={themeInput}>
      <AppContext.Provider value={app}>
        <Router 
          type={type} 
          routerStore={app.routing}
          ref={ref}
          onRouteChange={handleRouteChange}
          {...rest}
        > 
          {children} 
        </Router>
      </AppContext.Provider>
    </ThemeProvider>    
  );
})

App.defaultProps = {
  type: 'hash',
  routes: [],
  on: {},
}

App.propTypes = {
  /**
   * 全局的App对象
   */
  app: PropTypes.instanceOf(AppClass),
  /**
   * app events
   */
  on: PropTypes.shape({
    /** 
     * `Page组件`挂载的时候触发
     */
    pageInit: PropTypes.func,
    /**
     * 路由改变时回调 {matched, location, name}
     */
    routeChange: PropTypes.func
  }),
  /**
   * 路由列表
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
      /** 嵌套路由 */
      children : PropTypes.array,
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
  ).isRequired,
  /**
   * 路由类型
   * @see [路由配置](https://github.com/ReactTraining/history/blob/master/README.md)
   */
  type: PropTypes.oneOf(['browser', 'memory', 'hash']),
  /**
   * 主题
   * @param {object} theme 默认主题
   * @returns {object} 
   */
  theme: PropTypes.object,
  /**
   * routerStore 全局的路由对象
   */
  routerStore: PropTypes.instanceOf(RouterStore),
}

export default App;