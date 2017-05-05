import React, {Component} from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {HashRouter, MemoryRouter, BrowserRouter, Route} from 'react-router-dom'

export default class App extends Component {

  static uiName = 'App'

  static defaultProps = {
    type : 'memory'
  }

  static propTypes = {
    type: PropTypes.string
  }

  render() {
    const {
      type,
      children
    } = this.props;

    let Router;

    switch (type) {
      case 'Browser':
        Router = BrowserRouter;
        break;
      case 'hash':
        Router = HashRouter;
        break;
      case 'memory':
      default:
        Router = MemoryRouter;
    }

    return (
      <Router hashType="hashbang">
        <Route render={(props)=>{
          return React.cloneElement(children, {...props});
        }}/>
      </Router>
    );
  }
}
