import App from './components/app/app';
import View from './components/view/view';
import Page from './components/page/page';
import Preloader from './components/preloader/preloader';
import theme from './components/theme/theme';
import request from './components/request/request';
import device from './components/device/device';

import { Link, Route, matchPath, withRouter } from 'react-router-dom';

import AppContext from './components/app/appContext';



export { 
  App, 
  AppContext,
  View, 
  Page, 
  Link, 
  Preloader,
  device,
  matchPath, 
  withRouter,
  request,
  Route,
  theme
}
