import React from 'react';
import PropTypes from 'prop-types';
import { WUI_app, WUI_global } from './styles';
import AppContext from './AppContext';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../styles/defaultTheme';

//modules
import AppClass from '../modules/class';
import DeviceModule from '../modules/device/device';
import SupportModule from '../modules/support/support';
import ResizeModule from '../modules/resize/resize';

AppClass.use([ DeviceModule, SupportModule, ResizeModule ]);

/**
 * 创建一个App环境, 包裹其他组件
 * @visibleName App 顶层组件
 */
const App = (props) => {
  const {
    children,
    theme: themeInput,
    routes,
    router: Router,
    on,
    ...rest
  } = props;

  const appParams = { on };

  const app = new AppClass(appParams);
  
  const rootRef = React.createRef(null);
  
  const theme = typeof themeInput ==='function' ? themeInput(defaultTheme) : themeInput;

  app.routes = routes;

  React.useEffect(()=>{
    app.root = rootRef.current;
    app.useModulesParams(appParams);
    app.useModules();
    app.emit('init');
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={app}> 
        <WUI_app ref={rootRef}>
          <WUI_global/>
          <Router {...rest}>
          {children}
          </Router>
        </WUI_app>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

App.defaultProps = {
  theme: defaultTheme,
  router: HashRouter,
  routes: [],
  on: {},
}

App.propTypes = {
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
   * 路由类型: 
   * import { HashRouter, MemoryRouter, BrowserRouter} from 'react-router-dom';
   * @see [react-router-dom](https://reacttraining.com/react-router/web/api/HashRouter)
   */
  router: PropTypes.func,
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
}

export default App;