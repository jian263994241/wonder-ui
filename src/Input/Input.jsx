import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import addClass from 'dom-helpers/class/addClass';
import removeClass from 'dom-helpers/class/removeClass';
import hasClass from 'dom-helpers/class/removeClass';
import {StyledInputWrap, StyledCleanButton, StyledInputInfo} from './Styled';

function noop(){};

export default class Input extends PureComponent {

  static propTypes = {
    type: PropTypes.string,
    info: PropTypes.any,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    type: 'text',
    onFocus: noop,
    onBlur: noop,
    onChange: noop,
  }

  state = {
    cleanVisible: false
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
    if(!e.target.readOnly){
      onFocus && onFocus(e);
      this.toggleBtn(e);
    }
  }

  onBlur = (e)=>{
    const onBlur = this.props.onBlur;

    onBlur && onBlur();

    this.setState({cleanVisible: false});
  }

  toggleBtn = (e)=>{
    const value = e.target.value;
    // const cleanVisible = hasClass(this._cleanBtn, 'visible');

    const cleanVisible = this.state.cleanVisible;

    if(value.length > 0 && !cleanVisible) {
      // addClass(this._cleanBtn, 'visible');
      this.setState({cleanVisible: true});
    }

    if(value.length === 0 && cleanVisible) {
      // removeClass(this._cleanBtn, 'visible');
      this.setState({cleanVisible: false});
    }
  }

  clean = ()=>{
    const input = this.refs.input;
    input.value = '';
    input.focus();
    this.setState({cleanVisible: false});
    // removeClass(this._cleanBtn, 'visible');
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
      <StyledInputWrap className={className} style={style} cleanVisible={this.state.cleanVisible}>
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
