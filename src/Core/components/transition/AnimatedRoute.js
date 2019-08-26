import React from 'react';
import { Route, matchPath } from 'react-router-dom';
import RouteTransition from './RouteTransition';

function getKey({ pathname }, path, exact) {
  return matchPath(pathname, { exact, path }) ? 'match' : 'no-match';
}

const TransRoute = ({component, style, ...props}) => (
  <Route {...props} render={props => React.createElement(component, {style, ...props})} />
);

const AnimatedRoute = ({ component, path, exact, ...routeTransitionProps }) => (
  <Route
    render={({ location, match }) => (
      <RouteTransition {...routeTransitionProps}>
        <TransRoute
          key={getKey(location, path, exact)}
          path={path}
          exact={exact}
          location={location}
          component={component}
        />
      </RouteTransition>
    )}
  />
);


export default AnimatedRoute;
