import App from './components/app/app';
import View from './components/view/view';
import Page from './components/page/page';
import theme from './components/theme/theme';
import { Link, matchPath, withRouter } from 'react-router-dom';

import AppContext from './components/app/appContext';
import Device from './utils/device';
import Support from './utils/support';
import Request from './utils/request';
import Utils from './utils/utils';
import Events from './utils/events';


export { 
  App, 
  AppContext,
  View, 
  Page, 
  Link, 
  matchPath, 
  withRouter,
  Device,
  Support,
  Request,
  Utils,
  Events,
  theme
}
