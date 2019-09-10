import React from 'react';
import PropTypes from 'prop-types';
import { WUI_app, WUI_global } from './styles';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../styles/defaultTheme';
import { useForkRef } from '../../utils/reactHelpers';
import Router from '../Router';
import RouterStore from '../RouterStore';
import AppContext from './AppContext';
import AppClass from '../AppClass';

/**
 * 创建一个App环境, 包裹其他组件
 * @visibleName App 
 */
const App = React.forwardRef((props, ref) => {
  const {
    app: appInput,
    children,
    theme: themeInput,
    historyType,
    historyConfig = {},
    routes,
    on,
    routerStore: routerStoreInput,
    ...rest
  } = props;

  const appParams = { on };
  const app = React.useMemo(()=> appInput || new AppClass(appParams), [appParams]);
  const rootRef = React.createRef(null);
  const handleRef = useForkRef(rootRef, ref);
  
  const theme = React.useMemo(()=> {
    return typeof themeInput ==='function' ? themeInput(defaultTheme) : themeInput;
  }, [themeInput]);

  app.routes = routes;
  app.routing = React.useMemo(()=> routerStoreInput || new RouterStore(), [routerStoreInput]);

  React.useEffect(()=>{
    app.root = rootRef.current;
    app.useModulesParams(appParams);
    app.useModules();
    app.emit('init');

    return ()=>{
      app.emit('destroy');
    }
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={app}> 
        <WUI_app ref={handleRef} {...rest}>
          <WUI_global/>
          <Router 
            type={historyType} 
            routerStore={app.routing}
            {...historyConfig}
          > 
            {children} 
          </Router>
        </WUI_app>
      </AppContext.Provider>
    </ThemeProvider>
  );
})

App.defaultProps = {
  theme: defaultTheme,
  historyType: 'hash',
  routes: [],
  on: {},
}

App.propTypes = {
  /**
   * 全局app对象
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
      /** 嵌套路由 仅支持2级 */
      routes: PropTypes.array,
      /**
       * 入口重定向
       */
      redirect: PropTypes.string
    })
  ),
  /**
   * 路由类型
   */
  historyType: PropTypes.oneOf(['browser', 'memory', 'hash']),
  /**
   * @see [路由配置](https://github.com/ReactTraining/history/blob/master/README.md)
   */
  historyConfig: PropTypes.object,
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
   * 全局路由状态 
   */
  routerStore: PropTypes.instanceOf(RouterStore),
}

export default App;