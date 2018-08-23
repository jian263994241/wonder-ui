import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {StyledInputWrap, StyledInputInner, StyledCleanButton, StyledInputFooter, StyledInputHeader} from './Styled';

const noop = ()=>{};

export default class Input extends PureComponent {

  static propTypes = {
    type: PropTypes.string,
    header: PropTypes.any,
    footer: PropTypes.any,
  }

  static defaultProps = {
    type: 'text',
    onChange: noop,
    onFocus: noop,
    onBlur: noop,
    innerRef: noop
  }

  state = {
    cleanVisible: false
  }

  componentDidMount(){
    const innerRef = this.props.innerRef;
    const input = this.refs.input;

    this.props.innerRef(input);

  }

  handleFocus = (e)=>{
    this.props.onFocus(e);
    this.toggleBtn(e);
  }

  handleBlur = (e)=>{
    this.props.onBlur(e);
    this.toggleBtn(e);
  }

  handleChange = (e)=>{
    this.props.onChange(e);
    this.toggleBtn(e);
  }

  toggleBtn = (e)=>{

    if(e.type === 'blur' || e.target.readOnly){
      this.setState({cleanVisible: false});
      return ;
    }

    if(e.type === 'change' || e.type === 'focus'){
      let value = e.target.value;
      let cleanVisible = this.state.cleanVisible;

      if(value.length > 0 && !cleanVisible){
        this.setState({cleanVisible: true});
      }
      if(value.length === 0 && cleanVisible) {
        this.setState({cleanVisible: false});
      }
    }
  }

  clean = ()=>{
    let input = this.refs.input;
    let lastValue = input.value;

    input.value = '';

    let tracker = input._valueTracker;
    let event = new Event('change', { bubbles: true});

    //react 15
    event.simulated = true;
    //react 16
    tracker && tracker.setValue(lastValue);

    input.dispatchEvent(event);
    input.focus();
  }

  render(){
    const {
      className,
      style,
      type,
      header,
      footer,
      innerRef,
      onChange,
      onBlur,
      onFocus,
      value,
      ...rest
    } = this.props;

    return (
      <StyledInputWrap className={className} style={style} >
        {header && <StyledInputHeader>{header}</StyledInputHeader>}
        <StyledInputInner cleanVisible={this.state.cleanVisible}>
          <input
            ref="input"
            type={type}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            value={value}
            {...rest}
          />
          <StyledCleanButton innerRef={x=>this._cleanBtn = x} onClick={this.clean}></StyledCleanButton>
        </StyledInputInner>
        {footer && <StyledInputFooter>{footer}</StyledInputFooter>}
      </StyledInputWrap>

    )
  }
}
