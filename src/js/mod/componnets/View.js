import React, {Component, Children} from 'react';
import {cloneElement} from 'react-dom';
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {HashRouter, MemoryRouter, BrowserRouter, Route, Switch} from 'react-router-dom'
import SlidePage from './SlidePage'
import {Navbar} from './Bars'

export default class View extends Component {

  static uiName = 'View'

  static defaultProps = {
    type : 'memory'
  }

  static propTypes = {
    type: PropTypes.string,
    noAnimation: PropTypes.bool,
    navbar: React.PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ])
  }

  render() {
    const {
      type,
      className,
      children,
      navbar,
      noAnimation,
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

    let throughBar;

    if(navbar){
      throughBar = <Navbar className="theme-gray" {...navbar}/>
    }

    const renderPage = (props)=>(
      <SlidePage history={props.history} noAnimation={noAnimation} className={classnames({'navbar-through': navbar})}>
        <Switch> {children} </Switch>
      </SlidePage>
    );



    const cls = classnames('view', className);

    return (
      <div className={cls}>
        {throughBar}
        <Router hashType="hashbang" {...rest}>
          <Route render={renderPage}/>
        </Router>
      </div>
    );
  }
}
