//react-router-dom
export {
  MemoryRouter,
  Prompt,
  Redirect,
  Route,
  Router,
  StaticRouter,
  Switch,
  generatePath,
  matchPath,
  withRouter,
  useHistory,
  useParams,
  useRouteMatch,
  BrowserRouter,
  HashRouter,
  Link,
  NavLink
} from 'react-router-dom';

export { default as Routes } from './Routes';
export * from './Routes';
export { default as createRoutes } from './createRoutes';

export {
  useLocation,
  useLocationExact,
  usePageEffect,
  useNavigation
} from './hooks';

export { createRoutesFromArray } from './utils';
