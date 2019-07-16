import React, { PureComponent } from 'react';
import {CheckboxIcon, Input} from './Styled';

export default class Checkbox extends PureComponent {

  static uiName = 'Checkbox';

  static Icon = CheckboxIcon;

  render(){
    const {
      children,
      className,
      style,
      IconStyle,
      iconAfter,
      ...rest
    } = this.props;

    return (
      <label className={className} style={style}>
        <Input type="checkbox" {...rest}/>
        <CheckboxIcon style={IconStyle}/>
        {children}
      </label>
    )
  }
};
