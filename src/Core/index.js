import App from './components/app';
import View from './components/view';
import Page from './components/page';
import Preloader from './components/preloader';
import request from './components/request';
import device from './components/device';

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
  Route
}
