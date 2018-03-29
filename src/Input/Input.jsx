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

  componentDidMount(){
    const {innerRef} = this.props;

    innerRef && innerRef(this.refs.input);
  }

  onChange = (e)=>{
    const onChange = this.props.onChange;

    onChange && onChange(e);

    this.toggleBtn(e);
  }

  onFocus = (e)=>{
    const onFocus = this.props.onFocus;

    onFocus && onFocus(e);

    this.toggleBtn(e);
  }

  onBlur = (e)=>{
    const onBlur = this.props.onBlur;

    onBlur && onBlur();

    removeClass(this._cleanBtn, 'visible');
  }

  toggleBtn = (e)=>{
    const value = e.target.value;
    const cleanVisible = hasClass(this._cleanBtn, 'visible');

    if(value.length > 0 && !cleanVisible) {
      addClass(this._cleanBtn, 'visible');
    }

    if(value.length === 0 && cleanVisible) {
      removeClass(this._cleanBtn, 'visible');
    }
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
      innerRef,
      onChange,
      ...rest
    } = this.props;

    return (
      <StyledInputWrap className={className} style={style}>
        <input
          {...rest}
          type={type}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          ref="input"
        />
        <StyledCleanButton innerRef={x=>this._cleanBtn = x} onClick={this.clean}></StyledCleanButton>
        {info && <StyledInputInfo>{info}</StyledInputInfo>}
      </StyledInputWrap>
    )
  }
}
