import React from 'react';
import PropTypes from 'prop-types';
import { WUI_app, WUI_global } from './styles';
import AppContext from './appContext';
import { HashRouter } from 'react-router-dom';
import AppClass from '../../utils/class';
import utils from '../../utils/utils';
import createTheme from '../styles/createTheme';
import { ThemeProvider } from 'styled-components';
//modules
import DeviceModule from '../../modules/device/device';
import SupportModule from '../../modules/support/support';
import ResizeModule from '../../modules/resize/resize';

AppClass.use([ DeviceModule, SupportModule, ResizeModule ]);

const App = (props) => {
  const {
    params =  {},
    children,
    theme,
    router: Router = HashRouter,
    ...rest
  } = props;
  const defaultParmas = { routes: [], on: {} };
  const appParams = React.useMemo(()=>utils.extend({}, defaultParmas, params), [params]);
  const app = new AppClass(appParams);
  const rootRef = React.createRef();
  
  // const appHistory = React.useMemo(()=> history || createHashHistory({hashType: 'hashbang'}), [history]);
  const appTheme = React.useMemo(()=> createTheme(theme), theme);

  // app.history = appHistory;
  app.theme = appTheme;

  React.useEffect(()=>{
    app.root = rootRef.current;
    app.useModules();
    app.emit('init');
  }, []);
  
  return (
    <ThemeProvider theme={appTheme}>
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

App.propTypes = {
  /** */
  params: PropTypes.shape({
    routes: PropTypes.array,
    on: PropTypes.object
  }),
  /**ignore */
  Router: PropTypes.func
}

export default App;