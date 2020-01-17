import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Fade from '../Fade';
import styles from './styles';
import useDisabledRefTouchMove from '@wonder-ui/utils/useDisabledRefTouchMove';
import useForkRef from '@wonder-ui/utils/useForkRef';
import withStyles from '../withStyles';
/**
 * Modal, Drawer, Dialog等浮层的背板
 * @visibleName Backdrop - 背板
 */
const Backdrop = React.forwardRef(function Backdrop(props, ref) {
  const { 
    classes,
    className,
    timeout,
    visible, 
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

export default withStyles(styles)(Backdrop);