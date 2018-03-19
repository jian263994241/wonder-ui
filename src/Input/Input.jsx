import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import addClass from 'dom-helpers/class/addClass';
import removeClass from 'dom-helpers/class/removeClass';
import hasClass from 'dom-helpers/class/removeClass';
import {StyledInputWrap, StyledCleanButton, StyledInputInfo} from './Styled';

export default class Input extends PureComponent {

  static propTypes = {
    type: PropTypes.string,
    info: PropTypes.any
  }

  static defaultProps = {
    type: 'text',
  }

  state = {
    showCleanBtn: false
  }

  onChange = (e)=>{
    const onChange = this.props.onChange;
    const value = e.target.value;
    const cleanVisible = hasClass(this._cleanBtn, 'visible');

    if(value.length > 0 && !cleanVisible) {
      addClass(this._cleanBtn, 'visible');
    }

    if(value.length === 0 && cleanVisible) {
      removeClass(this._cleanBtn, 'visible');
    }

    onChange && onChange(e);
  }

  clean = ()=>{
    const input = this.refs.input;
    input.value = '';
    input.focus();
    removeClass(this._cleanBtn, 'visible');
  }

  render(){
    const {
      className,
      style,
      type,
      info,
      onChange,
      ...rest
    } = this.props;

    return (
      <StyledInputWrap className={className} style={style}>
        <input type={type} onChange={this.onChange} {...rest} ref="input"/>
        <StyledCleanButton innerRef={x=>this._cleanBtn = x} onClick={this.clean}></StyledCleanButton>
        {info && <StyledInputInfo>{info}</StyledInputInfo>}
      </StyledInputWrap>
    )
  }
}
