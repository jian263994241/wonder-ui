import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import addClass from 'dom-helpers/class/addClass';
import removeClass from 'dom-helpers/class/removeClass';
import hasClass from 'dom-helpers/class/removeClass';
import events from 'dom-helpers/events';
import {StyledInputWrap, StyledInputInner, StyledCleanButton, StyledInputFooter, StyledInputHeader} from './Styled';

export default class Input extends PureComponent {

  static propTypes = {
    type: PropTypes.string,
    header: PropTypes.any,
    footer: PropTypes.any,
  }

  static defaultProps = {
    type: 'text',
    onChange: e=>{},
    innerRef: input=>{}
  }

  state = {
    cleanVisible: false
  }

  componentDidMount(){
    const {innerRef, onChange} = this.props;
    const input = this.refs.input;

    this.props.innerRef(input);
    events.on(input, 'input', e=>{
      this.props.onChange(e);
      this.toggleBtn(e);
    });
    events.on(input, 'focus', e=>this.toggleBtn(e));
    events.on(input, 'blur', e=>this.toggleBtn(e));

  }

  toggleBtn = (e)=>{

    if(e.type === 'blur' || e.target.readOnly){
      this.setState({cleanVisible: false});
      return ;
    }

    if(e.type === 'input' || e.type === 'focus'){
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
    const input = this.refs.input;
    input.value = '';
    input.focus();
    input.dispatchEvent(new Event('input'));
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
      ...rest
    } = this.props;

    return (
      <StyledInputWrap className={className} style={style} >
        {header && <StyledInputHeader>{header}</StyledInputHeader>}
        <StyledInputInner cleanVisible={this.state.cleanVisible}>
          <input ref="input" type={type} {...rest} />
          <StyledCleanButton innerRef={x=>this._cleanBtn = x} onClick={this.clean}></StyledCleanButton>
        </StyledInputInner>
        {footer && <StyledInputFooter>{footer}</StyledInputFooter>}
      </StyledInputWrap>

    )
  }
}
