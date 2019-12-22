import React from 'react';
import PropTypes from 'prop-types';
import { WUI_global } from './styles';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as ThemeProvider2 } from '@wonder-ui/styles';
import defaultTheme from '../styles/defaultTheme';
import useForkRef from '@wonder-ui/utils/useForkRef';
import { Router, RouterStore } from '@wonder-ui/router';
import AppContext from './AppContext';
import AppClass from '../AppClass';
import useEventCallback from '@wonder-ui/utils/useEventCallback';

/**
 * 创建一个App环境, 包裹其他组件
 * @visibleName App 顶层组件
 */
const App = React.forwardRef((props, ref) => {
  const {
    app: appInput,
    children,
    theme: themeInput,
    type,
    routes,
    on,
    routerStore: routerStoreInput,
    ...rest
  } = props;
  
  const app = React.useMemo(()=> {
    const appParams = { on };
    const _app = appInput || new AppClass(appParams);
    _app.routes = routes;
    _app.useModulesParams(appParams);
    _app.useModules();
    return _app;
  }, [on, routes]);
  const rootRef = React.createRef(null);
  const handleRef = useForkRef(rootRef, ref);

  const theme = React.useMemo(()=> {
    return typeof themeInput ==='function' ? themeInput(defaultTheme) : themeInput;
  }, [themeInput]);

  app.routing = React.useMemo(()=> routerStoreInput || new RouterStore(), [routerStoreInput]);
  
  React.useEffect(()=>{
    app.root = rootRef.current;
    app.emit('init');
    return ()=>{
      app.emit('destroy');
    }
  }, []);

  const handleRouteChange = useEventCallback((mached, location, name)=>{
    app.emit('routeChange', mached, location, name);
  });
  
  return (
    <ThemeProvider2 theme={theme}>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={app}>
          <>
            <WUI_global/>
            <Router 
              type={type} 
              routerStore={app.routing}
              ref={handleRef}
              onRouteChange={handleRouteChange}
              {...rest}
            > 
              {children} 
            </Router>
          </>
        </AppContext.Provider>
      </ThemeProvider>
    </ThemeProvider2>
    
  );
})

App.defaultProps = {
  theme: defaultTheme,
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
  theme: PropTypes.oneOfType([
    /**
     * @param {object} theme 默认主题
     * @returns {object} 
     */
    PropTypes.func,
    PropTypes.object
  ]),
  /**
   * routerStore 全局的路由对象
   */
  routerStore: PropTypes.instanceOf(RouterStore),
}

export default App;