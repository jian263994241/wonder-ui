import React from 'react';
import PropTypes from 'prop-types';
import { transitions } from '@wonder-ui/styles';
import elementAcceptingRef from '@wonder-ui/utils/elementAcceptingRef';
import RtgTransition from 'react-transition-group/Transition';
import useForkRef from '@wonder-ui/utils/useForkRef';

const reflow = (node) => node.scrollTop;

const getTransitionProps = (props, options) => {
  const { timeout, style = {} } = props;
  const _timeout =
    typeof timeout === 'number' ? timeout : timeout[options.mode];
  return {
    duration: style.transitionDuration || _timeout,
    delay: style.transitionDelay,
  };
};

const Transition = React.forwardRef((props, ref) => {
  const {
    children,
    easing,
    in: inProp,
    mountOnEnter,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    propertys = [],
    style,
    styles = { entering: {}, entered: {} },
    timeout,
    unmountOnExit,
    ...rest
  } = props;
  const handleRef = useForkRef(children.ref, ref);

  const handleEnter = (node) => {
    reflow(node); // So the animation always start from the start.

    const transitionProps = getTransitionProps(
      { style, timeout },
      { mode: 'enter', easing },
    );
    node.style.webkitTransition = transitions.create(
      propertys,
      transitionProps,
    );
    node.style.transition = transitions.create(propertys, transitionProps);
    onEnter && onEnter(node);
  };

  const handleExit = (node) => {
    const transitionProps = getTransitionProps(
      { style, timeout },
      { mode: 'exit', easing },
    );
    node.style.webkitTransition = transitions.create(
      propertys,
      transitionProps,
    );
    node.style.transition = transitions.create(propertys, transitionProps);
    onExit && onExit(node);
  };

  return (
    <RtgTransition
      appear
      mountOnEnter={mountOnEnter}
      unmountOnExit={unmountOnExit}
      in={inProp}
      onEnter={handleEnter}
      onEntering={onEntering}
      onEntered={onEntered}
      onExit={handleExit}
      onExiting={onExiting}
      onExited={onExited}
      timeout={timeout}
    >
      {(state, childProps) => {
        return React.cloneElement(children, {
          style: {
            ...style,
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
            ...styles[state],
            ...children.props.style,
          },
          ref: handleRef,
          ...childProps,
          ...rest,
        });
      }}
    </RtgTransition>
  );
});

Transition.defaultProps = {
  mountOnEnter: true,
  timeout: {
    enter: transitions.duration.enteringScreen,
    exit: transitions.duration.leavingScreen,
  },
};

Transition.propTypes = {
  /**
   * If you want to "lazy mount" the component on the first in={true} you can set mountOnEnter.
   * @see http://reactcommunity.org/react-transition-group/transition#Transition-prop-mountOnEnter
   */
  mountOnEnter: PropTypes.bool,
  /**
   * @see http://reactcommunity.org/react-transition-group/transition#Transition-prop-unmountOnExit
   */
  unmountOnExit: PropTypes.bool,
  /**
   * A single child content element.
   */
  children: elementAcceptingRef,
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
   * transition-propertys
   */
  propertys: PropTypes.array,
  /**
   * overwrite state style
   */
  styles: PropTypes.shape({
    entering: PropTypes.object,
    entered: PropTypes.object,
  }),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  timeout: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number }),
  ]),
};

export default Transition;
