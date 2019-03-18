import React, {Component, Children, createElement, createContext} from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle, StyledView } from './Styled';
import { Router } from 'react-router-dom';
import { createHashHistory } from 'history';
import attachFastClick from './fastclick';

function noop(){};

export const EventContext = createContext('events');

export default class Views extends Component {

  static propTypes = {
    onRouteChange: PropTypes.func,
    onRouteInit: PropTypes.func,
    onPageInit: PropTypes.func,
    onPageRemove: PropTypes.func,
  }

  static defaultProps = {
    onRouteChange: noop,
    onRouteInit: noop,
    onPageInit: noop,
    onPageRemove: noop
  }

  constructor(props){
    super(props);
    this.history = props.history || createHashHistory({
      hashType: 'hashbang',
      basename: '',
      getUserConfirmation: null
    });
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
      onRouteInit,
      onRouteChange,
      onPageInit,
      onPageRemove,
      ...rest
    } = this.props;

    return (
      <EventContext.Provider value={{onPageInit, onPageRemove}}>
        <GlobalStyle/>
        <Router history={this.history}>
          <StyledView {...rest}/>
        </Router>
      </EventContext.Provider>

    )
  }
}
