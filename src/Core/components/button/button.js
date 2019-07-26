import React from 'react';
import PropTypes from 'prop-types';
import { WUI_button } from './styles';
import ButtonBase from './buttonBase';
import theme from '../styles/defaultTheme';
import { ThemeProvider } from 'styled-components';

const Button =  WUI_button.withComponent((props)=>{
  const {
    icon,
    iconPosition = 'before',
    children,
    ...rest
  } = props;

  return (
    <ThemeProvider theme={theme}>
      <ButtonBase {...rest}>
        { iconPosition === 'before' && icon }
        {children}
        { iconPosition === 'after' && icon }
      </ButtonBase>
    </ThemeProvider>
  )
})

Button.ButtonBase = ButtonBase;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
}

export default Button;