import React from 'react';
import PropTypes from 'prop-types';
import { WUI_button } from './styles';
import useTheme from '../styles/useTheme';

/**
 * 允许用户轻按一下即可做出选择.
 * @visibleName Button 按钮
 */
const Button =  React.forwardRef((props, ref)=> {
  const {
    icon,
    iconPosition = 'before',
    children,
    theme,
    ...rest
  } = props;

  const [ThemeProvider] = useTheme(props);

  return (
    <ThemeProvider>
      <WUI_button ref={ref} {...rest}>
        { iconPosition === 'before' && icon }
        <span>{children}</span>
        { iconPosition === 'after' && icon }
      </WUI_button>
    </ThemeProvider>
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
}

Button.defaultProps = {
  variant: 'contained',
  size: 'medium',
  color: 'default'
}

export default Button;