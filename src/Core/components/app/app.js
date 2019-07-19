import React, {Component, Fragment, useEffect, useContext} from 'react';
import { WUI_app, WUI_global } from './styles';
import AppContext from './appContext';
import { createHashHistory } from 'history';
import { Router } from 'react-router-dom';
import AppClass from '../../utils/class';
import utils from '../../utils/utils';
import { ThemeProvider } from 'styled-components';
import createTheme from '../style/createTheme';
//modules
import DeviceModule from '../../modules/device/device';
import SupportModule from '../../modules/support/support';
import ResizeModule from '../../modules/resize/resize';
import TouchModule from '../../modules/touch/touch';
import UtilsModule from '../../modules/utils/utils';
import FastclickModule from '../../modules/fastclick/fastclick';
import CacheModule from '../../modules/cache/cache';

AppClass.use([ DeviceModule, SupportModule, ResizeModule, TouchModule, UtilsModule, FastclickModule, CacheModule ]);

export default function App ({
  params =  {},
  history,
  theme = {},
  children
}, ref){
  const defaultParmas = {
    touch: { fastClicks: true },
    routes: [],
    on: {},
    fallback: undefined,
  };

  const appParams = utils.extend({}, defaultParmas, params);
  const app = new AppClass(appParams);
  const rootRef = React.createRef();

  app.history = history || createHashHistory({hashType: 'hashbang'});

  useEffect(()=>{

    const _unlisten = app.history.listen((location, action)=> {
      app.emit('routeChange', {location, action})
    });

    app.root = React.createRef().current;

    app.useModules();
    
    app.emit('init'); 

    return ()=>{
      _unlisten();
    }

  })

  return (
    <WUI_app ref={rootRef}>
      <WUI_global/>
      <ThemeProvider theme={createTheme(theme)}>
        <AppContext.Provider value={app}> 
          <Router history={app.history}>
            <Fragment>{children}</Fragment>
          </Router>
        </AppContext.Provider>
      </ThemeProvider>
    </WUI_app>
  );
}
