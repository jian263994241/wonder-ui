import React from 'react';
import { WUI_button_base } from './styles';


const ButtonBase = React.forwardRef(({ color, size, variant, fullWidth, full, ...rest}, ref)=> {
  return (
    <WUI_button_base {...rest} ref={ref}/>
  )
});

export default ButtonBase;