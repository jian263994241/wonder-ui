import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Indicator from '../Indicator';
import Modal from '../Modal';
import withStyles from '../withStyles';

/**
 * 用于加载/处理数据时候的等待状态
 * 
 * @visibleName Preloader 指示器浮层
 */
const Preloader = React.forwardRef(function Preloader(props, ref) {
  const {
    classes,
    className,
    indicator = <Indicator size="large" spin/>,
    navbarHeight,
    visible,
    ...rest
  } = props;

  return (
    <Modal
      visible={visible}
      BackdropProps={{ style: {backgroundColor: 'transparent'}}}
      {...rest}
    >
      <div className={clsx(classes.root, className)} aria-hidden="true" ref={ref}>
        { indicator }
      </div> 
    </Modal>
  );
});

Preloader.defaultProps = {
  visible: false
};

Preloader.propTypes = {
  /** 是否显示指示器 */
  visible: PropTypes.bool,
  /** 中间的旋转部分 */
  indicator: PropTypes.element,
  /** 
   * @ignore
   */
  navbarHeight: PropTypes.number
};

Preloader.displayName = 'Preloader';

export default withStyles({
  root: {
    boxSizing: 'border-box',
    position: 'fixed',
    top: props => `calc(50% + ${props.navbarHeight || 0}px)`,
    left: '50%',
    transform: 'translate3d(-50%, -50%, 0)',
    zIndex: 13500,
    contain: 'content',
    willChange: 'transform, opacity',
    color: '#fff',
    display: 'inline-block',
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 10,
    outline: 'none'
  }
})(Preloader);