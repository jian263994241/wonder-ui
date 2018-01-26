import React, {Component, Children, createElement} from 'react';
import PropTypes from 'prop-types';
import {StyledViews} from './Styled';
import HashRouter from 'react-router-dom/HashRouter';
import emptyfunction from 'emptyfunction';
import attachFastClick from 'fastclick';

export default class Views extends Component {

  static propTypes = {
    router: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.func
    ]).isRequired,
    onRouteChange: PropTypes.func,
    onRouteInit: PropTypes.func,
    onPageInit: PropTypes.func,
    onPageRemove: PropTypes.func
  }

  static childContextTypes = {
    onPageInit: PropTypes.func,
    onPageRemove: PropTypes.func
  }

  static defaultProps = {
    router: [HashRouter, {
      hashType: 'hashbang',
      basename: '',
      getUserConfirmation: null
    }],
    onRouteChange: emptyfunction,
    onRouteInit: emptyfunction,
    onPageInit: emptyfunction,
    onPageRemove: emptyfunction,
  }

  getChildContext(){
    return {
      onPageInit: this.props.onPageInit,
      onPageRemove: this.props.onPageRemove
    }
  }

  componentDidMount(){
    const {onRouteChange, onRouteInit} = this.props;
    const history = this.refs.router.history;
    this._unlisten = history.listen(onRouteChange);
    attachFastClick(document.body);
    onRouteInit(history.location, history.action);
  }

  componentWillUnMount(){
    this._unlisten();
  }

  render(){
    const {
      router,
      children,
      onRouteChange,
      ...rest
    } = this.props;

    const Router = router[0];
    const routerConf = router[1] || {};

    return (
      <Router {...routerConf} ref="router">
        <StyledViews {...rest}>
          {children}
        </StyledViews>
      </Router>
    )
  }
}
