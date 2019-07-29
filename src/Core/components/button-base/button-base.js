import React from 'react';
import { WUI_button_base } from './styles';


const ButtonBase = ({ color, size, variant, fullWidth, ...rest})=>(
  <WUI_button_base {...rest}/>
);

export default ButtonBase;