import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '../ButtonBase';
import capitalize from '@wonder-ui/utils/capitalize';
import clsx from 'clsx';
import styles from './styles';
import { withStyles } from '@wonder-ui/styles';

/**
 * 按钮, 用做用户点击操作.
 * @visibleName Button 按钮
 */
const Button = React.forwardRef(function Button(props, ref) {
  const {
    back,
    children,
    classes,
    className,
    color = 'default',
    endIcon,
    full,
    disabled,
    fullWidth,
    icon,
    iconPosition = 'left',
    hexColor,
    replace,
    rounded,
    size = 'medium',
    startIcon,
    to,
    variant = 'contained',
    ...rest
  } = props;

  return (
    <ButtonBase
      className={clsx(
        classes.root,
        classes[variant],
        {
          [classes[`${variant}${capitalize(color)}`]]:
            color !== 'default' && color !== 'inherit' && color !== 'hex',
          [classes[`${variant}Size${capitalize(size)}`]]: size !== 'medium',
          [classes[`size${capitalize(size)}`]]: size !== 'medium',
          [classes.disabled]: disabled,
          [classes.fullWidth]: fullWidth,
          [classes.full]: full,
          [classes.borderRounded]: rounded,
          [classes.colorInherit]: color === 'inherit',
        },
        className,
      )}
      ref={ref}
      {...rest}
    >
      {iconPosition === 'left' && icon}
      {startIcon && (
        <span
          className={clsx({
            [classes.startIcon]: true,
            [classes.iconSizeSmall]: size === 'small',
            [classes.iconSizeMedium]: size === 'medium',
            [classes.iconSizeLarge]: size === 'large',
          })}
        >
          {startIcon}
        </span>
      )}
      <span className={classes.body}> {children} </span>
      {endIcon && (
        <span
          className={clsx({
            [classes.endIcon]: true,
            [classes.iconSizeSmall]: size === 'small',
            [classes.iconSizeMedium]: size === 'medium',
            [classes.iconSizeLarge]: size === 'large',
          })}
        >
          {endIcon}
        </span>
      )}
      {iconPosition === 'right' && icon}
    </ButtonBase>
  );
});

Button.propTypes = {
  /** 样式类名 */
  className: PropTypes.string,
  /**
   * @ignore
   */
  children: PropTypes.node.isRequired,
  /**
   * 按钮颜色
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  /**
   * icon
   */
  endIcon: PropTypes.node,
  /**
   * @ignore
   */
  style: PropTypes.object,
  /**
   * icon
   */
  startIcon: PropTypes.node,
  /** 禁用按钮 */
  disabled: PropTypes.bool,
  /** 100%宽度 */
  fullWidth: PropTypes.bool,
  /** 100%宽度, 100%高度 */
  full: PropTypes.bool,
  /** 超链接 */
  href: PropTypes.string,
  /**
   * icon
   * @ignore
   */
  icon: PropTypes.node,
  /**
   * icon的位置
   * @ignore
   */
  iconPosition: PropTypes.oneOf(['left', 'right']),
  /** 按钮尺寸 */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** 按钮类型 */
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  /** Link 组件的 props.to */
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * 设置圆形按钮
   */
  rounded: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'contained',
  size: 'medium',
  color: 'default',
};

export default withStyles(styles, { name: 'Button' })(Button);
