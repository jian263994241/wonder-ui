import React, {Component} from 'react';
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
import RequestModule from '../../modules/request/request';
import ResizeModule from '../../modules/resize/resize';
import TouchModule from '../../modules/touch/touch';
import UtilsModule from '../../modules/utils/utils';

AppClass.use([ DeviceModule, SupportModule, RequestModule, ResizeModule, TouchModule, UtilsModule ]);

export default class App extends Component {

  static defaultProps = {
    params: {},
    history: undefined,
    theme: {}
  }

  constructor(props) {
    super(props);
    const { params } = props;
    const defaultParmas = {
      touch: {
        fastClicks: true
      },
      routes: [],
      on: {},
      fallback: undefined,
    };

    const appParams = utils.extend({}, defaultParmas, params);

    const app = this.app = new AppClass(appParams);

    this.history = app.history = props.history || createHashHistory({hashType: 'hashbang'});

    this._unlisten = this.history.listen((location, action)=> {
      app.emit('routeChange', {location, action})
    });
  }

  componentDidMount() {
    const { app } = this;

    app.root = this.refs['root'];

    app.useModules();
    
    app.emit('init');    

  }

  componentWillUnMount(){
    this._unlisten();
  }

  render(){

    const { children, theme } = this.props;

    return (
      <WUI_app ref="root">
        <WUI_global/>
        <ThemeProvider theme={createTheme(theme)}>
          <AppContext.Provider value={this.app}> 
            <Router history={this.history}>
            <>{children}</>
            </Router>
          </AppContext.Provider>
        </ThemeProvider>
      </WUI_app>
    );
  }
}