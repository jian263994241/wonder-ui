import React, {Component, Children, createElement} from 'react';
import PropTypes from 'prop-types';
import {StyledView} from './Styled';
import Router from 'react-router-dom/Router';
import createHashHistory from 'history/createHashHistory';
import attachFastClick from './fastclick';

function noop(){};

export default class Views extends Component {

  static propTypes = {
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
    onRouteChange: noop,
    onRouteInit: noop,
    onPageInit: noop,
    onPageRemove: noop,
  }

  constructor(props){
    super(props);
    this.history = props.history || createHashHistory({
      hashType: 'hashbang',
      basename: '',
      getUserConfirmation: null
    });
  }

  getChildContext(){
    return {
      onPageInit: this.props.onPageInit,
      onPageRemove: this.props.onPageRemove
    }
  }

  componentWillMount(){
    const {onRouteChange, onRouteInit} = this.props;
    const history = this.history;
    this._unlisten = history.listen(onRouteChange);
    attachFastClick(document.body);
    onRouteInit(history.location, history.action);
  }

  componentWillUnMount(){
    this._unlisten();
  }

  render(){
    const {
      children,
      onRouteChange,
      ...rest
    } = this.props;

    return (
      <Router history={this.history}>
        <StyledView {...rest}>
          {children}
        </StyledView>
      </Router>
    )
  }
}
