import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {HashRouter, MemoryRouter, BrowserRouter, Route, Switch} from 'react-router-dom'
import SlidePage from './SlidePage'

export default class App extends Component {

  static uiName = 'App'

  static defaultProps = {
    type : 'hash'
  }

  static propTypes = {
    type: PropTypes.string,
    noAnimate: PropTypes.bool
  }

  state = {
    alert: {}
  }

  alert = (text, title, callbackOk)=>{
    if (typeof title === 'function') {
      callbackOk = arguments[1];
      title = undefined;
    }

    const clickOk = ()=>{
      this.setState({
        alert: {}
      }, callbackOk);
    }

    this.setState({
      alert: {text, title, callbackOk: clickOk, opened: true}
    });

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
