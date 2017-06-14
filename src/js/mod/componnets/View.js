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
    noAnimate: PropTypes.bool,
    fastclick: PropTypes.bool
  }

  render() {
    const {
      type,
      className,
      children,
      noAnimate,
      ...other
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
      <SlidePage {...props} noAnimate={noAnimate}>
        <Switch>
          {React.Children.map(children, (c, i)=>{
            return React.cloneElement(c, {app: this});
          })}
        </Switch>
      </SlidePage>
    )

    const cls = classnames('view', className);

    return (
      <div className={cls}>
        <Router hashType="hashbang">
          <Route render={renderPage}/>
        </Router>
      </div>
    );
  }
}
