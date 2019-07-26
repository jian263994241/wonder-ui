import React from 'react';
import { Link } from 'react-router-dom';
import { WUI_button_base } from './styles';

const ButtonBase = WUI_button_base.withComponent(
  React.forwardRef((props, ref)=>{
    const { to, href } = props;

    const { variant, color, size, fullWidth, ...rest} = props;

    const Component = to ? Link : href ? 'a' : 'button';

    return (
      <Component {...rest} ref={ref}/>
    )
  })
)

export default ButtonBase;