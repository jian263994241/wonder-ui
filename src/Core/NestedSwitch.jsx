import React, {Component, createElement, Children} from 'react';
import PropTypes from 'prop-types';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import Switch from 'react-router-dom/Switch';
import withRouter from 'react-router-dom/withRouter';
import {StylePages} from './Styled';

class NestedSwitch extends Component {

  render(){

    const {
      children,
      location,
    } = this.props;

    const classNames = {
      appear: 'my-appear',
      appearActive: 'my-active-appear',
      enter: 'my-enter',
      enterActive: 'my-active-enter',
      exit: 'my-exit',
      exitActive: 'my-active-exit',
    }

    return (
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          timeout={400}
          classNames="fade"
        >
          <Switch key={location.pathname}> {children} </Switch>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

export default withRouter(NestedSwitch);
