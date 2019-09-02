import React from 'react';
import { withRouter, matchPath, __RouterContext } from 'react-router-dom';
import Switch from './Switch';
import PropTypes from 'prop-types';
import find from 'array.prototype.find';
import RouteTransition from './RouteTransition';
import { parseUrlQuery } from '../../utils/helpers';

const NO_MATCH = {
  key: 'no-match',
};

/**
 * Not every location object has a `key` property (e.g. HashHistory).
 */
function getLocationKey(location) {
  const key = location.key || parseUrlQuery(location.search).location_key;
  return typeof key === 'string' ? key : location.pathname;
}

/**
 * Some superfluous work, but something we need to do in order
 * to persist matches/allow for nesting/etc.
 */
function getMatchedRoute(children, pathname) {
 return find(React.Children.toArray(children), child => {
   return matchPath(pathname, {
     exact: child.props.exact,
     path: child.props.path,
   });
 }) || NO_MATCH;
}

class AnimatedSwitch extends React.Component {
  static propTypes = {
    location: PropTypes.shape({
      key: PropTypes.string,
      pathname: PropTypes.string,
    }),
  };

  state = {
    key: getLocationKey(this.props.location),
    match: getMatchedRoute(this.props.children, this.props.location.pathname),
  };

  matches = 0;

  UNSAFE_componentWillReceiveProps(nextProps) {
    const nextMatch = getMatchedRoute(
      nextProps.children,
      nextProps.location.pathname,
    );

    if (this.state.match.key !== nextMatch.key) {
      this.setState({
        match: nextMatch,
        key: getLocationKey(nextProps.location) + ++this.matches,
      });
    }
  }

  render() {
    const { children, location, ...routeTransitionProps } = this.props;

    return (
      <RouteTransition {...routeTransitionProps}>
        <Switch key={this.state.key + location.search} location={location}>
          {children}
        </Switch>
      </RouteTransition>
    );
  }
}

export default withRouter(AnimatedSwitch);
