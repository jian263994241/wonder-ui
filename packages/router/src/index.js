// import './styles.module.less';
// export { default as AnimationRoute } from './AnimationRoute';
// export { default as AnimationRoutes } from './AnimationRoutes';
// export { default as Router } from './Router';
// export { default as RouterStore } from './RouterStore';
// export { default as Link } from './Link';
// export { default as effect } from './effect';
// export { default as useRouterContext } from './useRouterContext';
// export { default as usePageInit } from './usePageInit';


// //react-router-dom
// export {
//   Redirect, 
//   Route, 
//   Switch, 
//   matchPath, 
//   withRouter, 
//   useHistory,
//   useLocation,
//   useParams,
//   useRouteMatch,
//   __RouterContext 
// } from 'react-router-dom';

import './styles.module.less';
import AnimationRoute from './AnimationRoute';
import AnimationRoutes from './AnimationRoutes';
import Router from './Router';
import RouterStore from './RouterStore';
import Link from './Link';
import effect from './effect';
import useRouterContext from './useRouterContext';
import usePageInit from './usePageInit';

import {
  Redirect, 
  Route, 
  Switch, 
  matchPath, 
  withRouter, 
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
  __RouterContext 
} from 'react-router-dom';




// index.js
let webpackDemo = {
  AnimationRoute,
  AnimationRoutes,
  Router,
  RouterStore,
  Link,
  effect,
  useRouterContext,
  usePageInit,
  Redirect, 
  Route, 
  Switch, 
  matchPath, 
  withRouter, 
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
  __RouterContext 
}

export default webpackDemo;