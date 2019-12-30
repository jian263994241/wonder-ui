import React from 'react';
import PropTypes from 'prop-types';
import Slide from '../Slide';
import Modal from '../Modal';
import capitalize from '@wonder-ui/utils/capitalize';
import styles from './styles';
import withStyles from '../styles/withStyles';
import clsx from 'clsx';
/**
 * @visibleName Drawer 抽屉
 * 一个半屏幕的浮层
 */
const Drawer = React.forwardRef((props, ref)=>{
  const { 
    anchor = 'right',
    children,
    classes,
    className,
    visible,
    onCancel,
    style,
    modalProps,
    safeAreaBottom = false,
    variant='temporary'
  } = props;
  const oppositeDirection = { left: 'right', right: 'left', top: 'down', bottom: 'up' };
 
  const drawer = (
    <div 
      className={clsx(
        classes.root, 
        classes['anchor' + capitalize(anchor)],
        safeAreaBottom && anchor === 'bottom' && classes.safeAreaBottom,
        className
      )} 
      style={style}
      ref={ref}
    >
      {children}
    </div>
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
};

Drawer.displayName = 'Drawer';

export default withStyles(styles)(Drawer);