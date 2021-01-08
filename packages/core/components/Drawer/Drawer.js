import React from 'react';
import PropTypes from 'prop-types';
import capitalize from '@wonder-ui/utils/capitalize';
import clsx from 'clsx';
import Modal from '../Modal';
import Slide from '../Slide';
import styles from './styles';
import { withStyles } from '@wonder-ui/styles';
/**
 * 一个半屏幕的浮层
 * @visibleName Drawer 抽屉
 */
const Drawer = React.forwardRef((props, ref) => {
  const {
    anchor = 'right',
    children,
    classes,
    className,
    modalProps,
    onCancel,
    safeAreaBottom = false,
    style,
    variant = 'temporary',
    visible,
  } = props;
  const oppositeDirection = {
    left: 'right',
    right: 'left',
    top: 'down',
    bottom: 'up',
  };

  const drawer = (
    <div
      className={clsx(
        classes.root,
        classes['anchor' + capitalize(anchor)],
        safeAreaBottom && anchor === 'bottom' && classes.safeAreaBottom,
        className,
      )}
      style={style}
      ref={ref}
    >
      {children}
    </div>
  );

  if (variant === 'permanent') {
    return drawer;
  }

  const slidingDrawer = (
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
  );
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
  anchor: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
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
