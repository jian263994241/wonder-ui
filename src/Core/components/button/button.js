import React from 'react';
import PropTypes from 'prop-types';
import { WUI_button } from './styles';

const Button =  ({
  icon,
  iconPosition = 'before',
  children,
  ...rest
})=> (
  <WUI_button {...rest}>
    { iconPosition === 'before' && icon }
    <span>{children}</span>
    { iconPosition === 'after' && icon }
  </WUI_button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  full: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
}

Button.defaultProps = {
  variant: 'text',
  size: 'medium',
  color: 'default'
}

export default Button;