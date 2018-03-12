import React, { cloneElement, createElement, Component } from 'react';
import PropTypes from 'prop-types';
import TransitionGroup from 'react-transition-group/TransitionGroup'
import CSSTransition from 'react-transition-group/CSSTransition'


class RouteTransition extends Component {
  static defaultProps = {
    wrapperComponent: 'div',
  };

  static propTypes = {
    className: PropTypes.string,
    wrapperComponent: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.element,
      PropTypes.string,
    ]),
  };


  getStyles() {
    if (!this.props.children) {
      return null;
    }

    // const {onEnter, onEntering, onEntered, onExit, onExiting, onExited} = this.props;

    return (
      <CSSTransition
        timeout={this.props.timeout}
        key={this.props.children.key}
        children={this.props.children}
        classNames={this.props.classNames}
      />
    )

  }

  render() {
    const {
      className,
      classNames,
      wrapperComponent
    } = this.props;

    return (
      <TransitionGroup
        className={className}
        component={wrapperComponent}
      >
        {this.getStyles()}
      </TransitionGroup>
    )

  }
}

export default RouteTransition;
