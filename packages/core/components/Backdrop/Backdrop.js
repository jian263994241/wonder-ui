import React from 'react';
import PropTypes from 'prop-types';
import useDisabledRefTouchMove from '@wonder-ui/utils/useDisabledRefTouchMove';
import useForkRef from '@wonder-ui/utils/useForkRef';
import Fade from '../Fade';
import withStyles from '../styles/withStyles';
import clsx from 'clsx';
/**
 * 遮层
 * @visibleName Backdrop - 背板
 */
const Backdrop = React.forwardRef(function Backdrop(props, ref) {
  const { 
    visible, 
    timeout,
    classes,
    className,
    ...rest
  } = props;
  const rootRef = React.useRef();
  const handleRef = useForkRef(rootRef, ref);

  useDisabledRefTouchMove(rootRef);
  
  return (
    <Fade in={visible} timeout={timeout}>
      <div 
        className={clsx(classes.root, className)} 
        aria-hidden 
        ref={handleRef}
        {...rest}
      />
    </Fade>
  )
})

Backdrop.propTypes = {
  /**
   * click event
   */
  onClick: PropTypes.func,
}

Backdrop.displayName = 'Backdrop';

export default withStyles({
  root: {
    boxSizing: 'border-box',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
    willChange: 'opacity',
    contain: 'strict',
    touchAction: 'none',
    WebkitTapHighlightColor: 'transparent'
  }
})(Backdrop);