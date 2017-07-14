import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {HashRouter, MemoryRouter, BrowserRouter, Route, Switch} from 'react-router-dom'
import SlidePage from './SlidePage'

export default class View extends Component {

  static uiName = 'View'

  static defaultProps = {
    type : 'memory'
  }

  static propTypes = {
    type: PropTypes.string,
    noAnimate: PropTypes.bool
  }

  render() {
    const {
      type,
      className,
      children,
      noAnimate,
      ...rest
    } = this.props;

    let Router;

    switch (type) {
      case 'browser':
        Router = BrowserRouter;
        break;
      case 'memory':
        Router = MemoryRouter;
        break;
      case 'hash':
      default:
        Router = HashRouter;
    }

    const renderPage = (props)=>(
      <SlidePage history={props.history} noAnimate={noAnimate}>
        <Switch>
          {children}
        </Switch>
      </SlidePage>
    )

    const cls = classnames('view', className);

    return (
      <div className={cls}>
        <Router hashType="hashbang" {...rest}>
          <Route render={renderPage}/>
        </Router>
      </div>
    );
  }
}
