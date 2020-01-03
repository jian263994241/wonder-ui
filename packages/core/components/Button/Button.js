import React from 'react';
import PropTypes from 'prop-types';
import { useRouterContext } from '@wonder-ui/router';
import ButtonBase from '../ButtonBase';
import capitalize from '@wonder-ui/utils/capitalize';
import clsx from 'clsx';
import styles from './styles';
import withStyles from '../withStyles';

/**
 * 允许用户轻按一下即可做出选择.
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
    fullWidth,
    icon,
    iconPosition = 'before',
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
        classes['variant' + capitalize(variant)],
        classes['size' + capitalize(size)],
        { 
          [classes.fullWidth]: fullWidth,
          [classes.full]: full
        },
        className
      )}
      ref={ref} 
      onClick={handleClick}
      {...rest}
    >
      { iconPosition === 'before' && icon }
      <span className={classes.body}>{children}</span>
      { iconPosition === 'after' && icon }
    </ButtonBase>
  );
});

Button.propTypes = {
  /**
   * @ignore 
   */
  children: PropTypes.node.isRequired,
  /** 样式类名 */
  className: PropTypes.string,
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
  /** 按钮尺寸 */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** 按钮颜色 */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
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
  color: 'default'
};

Button.displayName = 'Button';

export default withStyles(styles)(Button);