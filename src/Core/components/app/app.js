import React from 'react';
import PropTypes from 'prop-types';
import { WUI_app, WUI_global } from './styles';
import AppContext from './AppContext';
import { HashRouter } from 'react-router-dom';
import useTheme from '../styles/useTheme';

//modules
import AppClass from '../modules/class';
import DeviceModule from '../modules/device/device';
import SupportModule from '../modules/support/support';
import ResizeModule from '../modules/resize/resize';
import TouchModule from '../modules/touch/touch';

AppClass.use([ DeviceModule, SupportModule, ResizeModule, TouchModule ]);
/**
 * 创建一个App环境, 包裹其他组件
 * @visibleName App 顶层组件
 */
const App = (props) => {
  const {
    children,
    theme,
    routes,
    router: Router,
    on,
    ...rest
  } = props;

  const app = new AppClass({ on, touch: { fastClicks: true } });
  const rootRef = React.createRef();
  
  const [ ThemeProvider ] = useTheme(props);

  app.routes = routes;

  React.useEffect(()=>{
    app.root = rootRef.current;
    app.useModules();
    app.emit('init');
  }, []);
  
  return (
    <ThemeProvider>
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
      component: PropTypes.func,
      /** 
       * 异步加载, 需要配合webpack import 使用
       * ()=>import('~/pages/some/index')
       */
      async: PropTypes.func,
      /** 嵌套路由 仅支持2级 */
      routes: PropTypes.array,
    })
  ),
  /** 
   * 路由类型: 
   * import { HashRouter, MemoryRouter, BrowserRouter} from 'react-router-dom';
   * @see [react-router-dom](https://reacttraining.com/react-router/web/api/HashRouter)
   */
  router: PropTypes.func
}

export default App;