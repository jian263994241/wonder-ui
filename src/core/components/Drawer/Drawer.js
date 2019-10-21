import React from 'react';
import PropTypes from 'prop-types';
import Slide from '../Slide';
import Modal from '../Modal';
import { Wrapper } from './styles';


const oppositeDirection = {
  left: 'right',
  right: 'left',
  top: 'down',
  bottom: 'up',
};


const Drawer = React.forwardRef((props, ref)=>{
  const { 
    anchor = 'right',
    children,
    visible,
    onClose,
    style,
    className,
    modalProps,
    variant='temporary'
  } = props;

  const drawer = (
    <Wrapper 
      anchor={anchor} 
      className={className} 
      style={style}
      ref={ref}
    >
      {children}
    </Wrapper>
  );

  if(variant=== 'permanent'){
    return drawer;
  }

  const slidingDrawer=(
    <Slide in={visible} direction={oppositeDirection[anchor]}>
      {drawer}
    </Slide>
  );

  if(variant === 'persistent'){
    return slidingDrawer;
  }

  return (
    <Modal
      disableEnforceFocus={false}
      visible={visible}
      onClose={onClose}
      hasTransition
      {...modalProps}
    >
      {slidingDrawer}
    </Modal>
  )
});

Drawer.propTypes = {
  variant: PropTypes.oneOf(['permanent', 'persistent', 'temporary']),
}


export default Drawer;