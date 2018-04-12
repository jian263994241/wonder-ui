import React, { cloneElement, createElement, Component } from 'react';
import ReactDOM, {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import TransitionGroup from '../react-transition-group/TransitionGroup';
import CSSTransition from '../react-transition-group/CSSTransition';


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

  render() {
    const {
      className,
      classNames,
      children,
      timeout,
      wrapperComponent,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited
    } = this.props;

    return (
      <TransitionGroup
        className={className}
        component={wrapperComponent}
      >
        <CSSTransition
          timeout={timeout}
          key={children.key}
          children={children}
          classNames={classNames}
          onEnter={onEnter}
          onEntered={onEntered}
        />
      </TransitionGroup>
    )

  }
}

export default RouteTransition;
