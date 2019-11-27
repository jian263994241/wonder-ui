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

/**
 * @visibleName Drawer 抽屉
 * 一个半屏幕的浮层
 */
const Drawer = React.forwardRef((props, ref)=>{
  const { 
    anchor = 'right',
    children,
    visible,
    onCancel,
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

  return (
    <Modal
      disableEnforceFocus={false}
      visible={visible}
      onCancel={onCancel}
      hasTransition
      keepMounted={variant === 'persistent'}
      {...modalProps}
    >
      {slidingDrawer}
    </Modal>
  )
});

Drawer.propTypes = {
  /**
   * 是否显示浮层
   */
  visible: PropTypes.bool,
  /**
   * 渲染方式
   */
  variant: PropTypes.oneOf(['permanent', 'persistent', 'temporary']),
  /**
   * Modal props
   */
  modalProps: PropTypes.object,
  /**
   * 点击背景触发关闭事件
   */
  onCancel: PropTypes.func,
  /**
   * 出现的位置
   */
  anchor: PropTypes.oneOf(['left' ,'right', 'top', 'bottom']),
  /**
   * root element classnames
   */
  className: PropTypes.string,
  /**
   * root element style
   */
  style: PropTypes.object,
}


export default Drawer;