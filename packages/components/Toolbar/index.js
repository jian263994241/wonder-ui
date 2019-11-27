import {StyledCenter, StyledLeft, StyledRight, StyledToolbar} from './Styled';
import React, {Component} from 'react';

export default class Toolbar extends Component {

  render(){

    const { title, extraLeft, extraRight, ...rest } = this.props;

    return (
       <StyledToolbar onTouchMove={e=>e.preventDefault()} {...rest}>
        { extraLeft && <StyledLeft>{extraLeft}</StyledLeft>}
        { title && <StyledCenter>{title}</StyledCenter> }
        { extraRight && <StyledRight>{extraRight}</StyledRight>}
       </StyledToolbar>
    )
  }
}
