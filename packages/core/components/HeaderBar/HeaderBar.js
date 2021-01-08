import React from 'react';
import PropTypes from 'prop-types';
import ArrowBackIosOutlined from '@wonder-ui/icons/ArrowBackIosOutlined';
import Close from '@wonder-ui/icons/Close';
import clsx from 'clsx';
import DisabledTouchMove from '../DisabledTouchMove';
import styles from './styles';
import { withStyles } from '@wonder-ui/styles';

/**
 * 提供一个左中右的通栏
 * @visibleName HeaderBar 首栏
 */
const HeaderBar = React.forwardRef(function HeaderBar(props, ref) {
  const {
    barLeft,
    barRight,
    bordered = true,
    classes,
    className,
    onBack,
    onClose,
    showBack,
    showClose,
    title,
    ...rest
  } = props;

  return (
    <DisabledTouchMove ref={ref}>
      <div
        className={clsx(
          classes.root,
          {
            [classes.hairline]: bordered,
          },
          className,
        )}
        {...rest}
      >
        <div className={classes.left}>
          {showBack && (
            <ArrowBackIosOutlined
              className={classes.defaultIcon}
              fontSize="small"
              onClick={onBack}
            />
          )}
          {showClose && (
            <Close
              className={classes.defaultIcon}
              fontSize="small"
              onClick={onClose}
            />
          )}
          {barLeft}
        </div>
        <div className={classes.title}>{title}</div>
        <div className={classes.right}>{barRight}</div>
      </div>
    </DisabledTouchMove>
  );
});

HeaderBar.propTypes = {
  /**
   * 左边
   */
  barLeft: PropTypes.node,
  /**
   * 右边
   */
  barRight: PropTypes.node,
  /**
   * 是否显示border bottom
   */
  bordered: PropTypes.bool,
  /**
   * @ignore
   */
  classes: PropTypes.object,
  /**
   * 点击回调, showBack下有效
   */
  onBack: PropTypes.func,
  /**
   * 点击回调, showClose下有效
   */
  onClose: PropTypes.func,
  /**
   * 显示返回icon
   */
  showBack: PropTypes.bool,
  /**
   * 显示关闭icon
   */
  showClose: PropTypes.bool,
};

HeaderBar.displayName = 'HeaderBar';

export default withStyles(styles)(HeaderBar);
