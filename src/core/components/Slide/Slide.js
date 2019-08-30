import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { duration } from '../styles/transitions';


const defaultTimeout = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen,
};

const Slide = React.forwardRef((props, ref)=>{
  const {
    children,
    direction = 'down',
    in: inProp,
    onEnter,
    onEntering,
    onExit,
    onExited,
    style,
    timeout = defaultTimeout,
    ...rest
  } = props;
  
})

Slide.defaultProps = {
  timeout: defaultTimeout,
  direction: 'down'
}


Slide.propTypes = {
  /**
   * A single child content element.
   */
  children: elementAcceptingRef,
  /**
   * Direction the child node will enter from.
   */
  direction: PropTypes.oneOf(['left', 'right', 'up', 'down']),
  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: PropTypes.bool,
  /**
   * @ignore
   */
  onEnter: PropTypes.func,
  /**
   * @ignore
   */
  onEntering: PropTypes.func,
  /**
   * @ignore
   */
  onExit: PropTypes.func,
  /**
   * @ignore
   */
  onExited: PropTypes.func,
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  timeout: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number }),
  ]),
};

export default Slide;