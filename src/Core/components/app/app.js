import React, {useEffect} from 'react';
import { WUI_app, WUI_global } from './styles';
import AppContext from './appContext';
import { createHashHistory } from 'history';
import { Router } from 'react-router-dom';
import AppClass from '../../utils/class';
import utils from '../../utils/utils';
//modules
import DeviceModule from '../../modules/device/device';
import SupportModule from '../../modules/support/support';
import ResizeModule from '../../modules/resize/resize';
import TouchModule from '../../modules/touch/touch';
import UtilsModule from '../../modules/utils/utils';
import FastclickModule from '../../modules/fastclick/fastclick';

AppClass.use([ DeviceModule, SupportModule, ResizeModule, TouchModule, UtilsModule, FastclickModule ]);

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

    app.root = rootRef.current;

    app.useModules();
    
    app.emit('init'); 

    return ()=>{
      _unlisten();
    }

  });

  return (
    <AppContext.Provider value={app}> 
      <WUI_app ref={rootRef}>
        <WUI_global/>
          <Router history={app.history}>
          {children}
          </Router>
      </WUI_app>
    </AppContext.Provider>
  );
}
