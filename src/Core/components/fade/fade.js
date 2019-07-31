import React from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import { useForkRef } from '../../utils/reactUtils';
import * as transitions from '../styles/transitions';

const defaultTimeout = { enter: 225, exit: 195 };

const reflow = node => node.scrollTop;

function getTransitionProps(props, options) {
  const { timeout, style = {} } = props;

  return {
    duration:
      style.transitionDuration || typeof timeout === 'number' ? timeout : timeout[options.mode],
    delay: style.transitionDelay,
  };
}

/**
 * The Fade transition is used by the [Modal](/components/modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: inProp,
    onEnter,
    onExit,
    style,
    styles = {
      entering: { opacity: 1 },
      entered: { opacity: 1 },
    },
    timeout = defaultTimeout,
    types = ['opacity'],
    ...other
  } = props;
  const handleRef = useForkRef(children.ref, ref);
  const [inState, setInState] = React.useState(false);

  React.useEffect(()=>{
    setInState(inProp)
  }, [inProp])

  const handleEnter = node => {
    reflow(node); // So the animation always start from the start.

    const transitionProps = getTransitionProps(
      { style, timeout },
      {
        mode: 'enter',
      },
    );
    node.style.webkitTransition = transitions.create(types, transitionProps);
    node.style.transition = transitions.create(types, transitionProps);
    
    if (onEnter) {
      onEnter(node);
    }
  };

  const handleExit = node => {
    const transitionProps = getTransitionProps(
      { style, timeout },
      {
        mode: 'exit',
      },
    );
    node.style.webkitTransition = transitions.create(types, transitionProps);
    node.style.transition = transitions.create(types, transitionProps);

    if (onExit) {
      onExit(node);
    }
  };


  return (
    <Transition
      appear
      in={inState}
      onEnter={handleEnter}
      onExit={handleExit}
      timeout={timeout}
      {...other}
    >
      {(state, childProps) => {
        return React.cloneElement(children, {
          style: {
            opacity: 0,
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
            ...styles[state],
            ...style,
            ...children.props.style,
          },
          ref: handleRef,
          ...childProps,
        });
      }}
    </Transition>
  );
});

Fade.propTypes = {
  /**
   * A single child content element.
   */
  children: PropTypes.element,
  /**
   * If `true`, the component will transition in.
   */
  in: PropTypes.bool,
  /**
   * @ignore
   */
  onEnter: PropTypes.func,
  /**
   * @ignore
   */
  onExit: PropTypes.func,
  /**
   * @ignore
   */
  style: PropTypes.object,
  /** 
   * overwrite animation type, default is opacity
   */
  types: PropTypes.array,
  /**
   * overwrite state style
   */
  styles: PropTypes.shape({ entering: PropTypes.object, entered: PropTypes.object }),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  timeout: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number }),
  ]),
};

export default Fade;