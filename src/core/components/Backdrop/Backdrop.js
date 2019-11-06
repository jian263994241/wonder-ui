import React from 'react';
import PropTypes from 'prop-types';
import { WUI_backdrop } from './styles';
import TouchFeedback from '../TouchFeedback';
import { useDisabledRefTouchMove, useForkRef } from '../../utils/reactHelpers';
import Fade from '../Fade';


/**
 * 遮层
 * @visibleName Backdrop - 背板
 */
const Backdrop = React.forwardRef((props, ref)=> {
  const { 
    visible, 
    timeout, 
    fixed, 
    ...rest
  } = props;
  const rootRef = React.useRef();
  const handleRef = useForkRef(rootRef, ref);

  useDisabledRefTouchMove(rootRef);
  
  return (
    <TouchFeedback>
      <Fade in={visible} timeout={timeout}>
        <WUI_backdrop aria-hidden fixed={fixed} ref={handleRef} {...rest} />
      </Fade>
    </TouchFeedback>
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