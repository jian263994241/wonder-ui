import React from 'react';
import PropTypes from 'prop-types';
import { useRouterContext } from '@wonder-ui/router';
import ButtonBase from '../ButtonBase';
import capitalize from '@wonder-ui/utils/capitalize';
import clsx from 'clsx';
import styles from './styles';
import withStyles from '../withStyles';

/**
 * 按钮, 用做用户点击操作.
 * @visibleName Button 按钮
 */
const Button =  React.forwardRef(function Button(props, ref) {
  const {
    back,
    children,
    classes,
    className,
    color='default',
    full,
    disabled,
    fullWidth,
    icon,
    iconPosition = 'left',
    hexColor,
    onClick,
    replace,
    size = 'medium',
    to,
    variant='contained',
    ...rest
  } = props;
  const { routerStore } = useRouterContext();
  const handleClick = React.useCallback((e)=>{
    if(routerStore){
      if(to){
        routerStore[replace ? 'replace': 'push'](to);
      }else if(back){
        routerStore.goBack();
      }
    }
    onClick && onClick(e);
  }, [to, back, onClick, replace]);

  return (
    <ButtonBase 
      className={clsx(
        classes.root,
        classes[variant],
        {
          [classes[`${variant}${capitalize(color)}`]]: color !== 'default' && color !== 'inherit' && color !== 'hex',
          [classes[`${variant}Size${capitalize(size)}`]]: size !== 'medium',
          [classes[`size${capitalize(size)}`]]: size !== 'medium',
          [classes.disabled]: disabled,
          [classes.fullWidth]: fullWidth,
          [classes.full]: full,
          [classes.colorInherit]: color === 'inherit',
        },
        className
      )}
      ref={ref} 
      onClick={handleClick}
      {...rest}
    >
      { iconPosition === 'left' && icon }
      <span className={classes.body}>{children}</span>
      { iconPosition === 'right' && icon }
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
   * @ignore
   */
  style: PropTypes.object,
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
   */
  icon: PropTypes.node,
  /**
   * icon的位置
   */
  iconPosition: PropTypes.oneOf(['left', 'right']),
  /** 按钮尺寸 */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** 按钮类型 */
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  /** Link 组件的 props.to */
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
};

Button.defaultProps = {
  variant: 'contained',
  size: 'medium',
  color: 'default',
  icon: null,
  iconPosition: 'left',

};

export default withStyles(styles, { name: 'Button' })(Button);