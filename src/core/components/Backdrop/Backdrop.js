import React from 'react';
import PropTypes from 'prop-types';
import { WUI_backdrop } from './styles';
import Fade from '../Fade';
import TouchFeedback from '../TouchFeedback';

/**
 * 遮层
 * @visibleName Backdrop - 背板
 */
const Backdrop = React.forwardRef((props, ref)=> {

  const { 
    visible, 
    timeout, 
    fixed, 
    onClick,
    ...rest
  } = props;

  const backdropRef = React.useRef();

  return (
    <Fade 
      in={visible} 
      timeout={timeout}
    >
      <TouchFeedback disabled={!onClick}>
        <WUI_backdrop
          aria-hidden
          fixed={fixed}
          ref={backdropRef}
          {...rest} 
        />
      </TouchFeedback>
    </Fade>
  )
})

Backdrop.defaultProps = {
  fixed: true
}

Backdrop.propTypes = {
  /**
   * fixed 定位
   */
  fixed: PropTypes.bool,
  /**
   * click event
   */
  onClick: PropTypes.func,
}

export default Backdrop;