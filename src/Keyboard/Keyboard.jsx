import React, {Component, createElement} from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import styled, {ThemeProvider} from 'styled-components';
import {StyleToolbar} from './Styled';

export default class Keyboard extends Component {

  static propTypes = {
    inline: PropTypes.bool,
    keypad: PropTypes.func.isRequired,
    getCancelIgnore: PropTypes.func
  }

  static defaultProps = {
    closeButton: true,
    closeText: '关闭'
  }

  state = {
    value: ''
  }

  input = null;

  getInput = (input)=>{
    const currentInput = document.getElementById(input);

    if(currentInput){
      this.input = currentInput;
      currentInput.readOnly = true;
      this.setState({ value: currentInput.value });
    }else{
      this.input = null;
    }
  }


  componentDidMount() {
    this.getInput(this.props.input);
    if(!this.props.inline){
      document.addEventListener('click', this.cancelIgnore);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.input != this.props.input){
      this.getInput(nextProps.input)
    }
    if(nextProps.visible !=  this.props.visible){
      document.activeElement.blur();
    }
  }

  componentWillUnmount() {
    if(!this.props.inline){
      document.removeEventListener('click', this.cancelIgnore);
    }
  }

  componentDidUpdate (prevProps, prevState){

    if(prevProps.visible && prevProps.visible != this.props.visible){
      let reset = this.refs.pad.reset;
      reset && reset()
    }
  }

  getElement = () => this.refs.modal.getModal();

  getCancelIgnore= ()=> this.input;

  cancelIgnore = (e)=>{
    const _target = e.target;
    const getCancelIgnore = this.getCancelIgnore;
    const onCancel = this.props.onCancel;
    this.refs.modal.getModal()
    if (!getCancelIgnore || !getCancelIgnore() || this.getElement().contains(_target))
      return false;
    const elements = getCancelIgnore();

    let result = false;
    if (Array.isArray(elements)) {
      elements.every((element, i) => {
        if (element.contains(_target)) {
          result = true;
          return false;
        } else {
          return true;
        }
      })
    } else {
      if (elements.contains(_target)) {
        result = true;
      }
    }

    if (!result && this.props.visible && onCancel) {
      onCancel();
    }

    return result;
  }

  render() {

    const {
      input,
      children,
      inline,
      value,
      dark,
      extraKey,
      random,
      keypad,
      maxLength,
      style,
      visible,
      onCancel,
      title,
      closeButton,
      closeText,
      ...rest
    } = this.props;

    const setValue = (a)=>{
      this.setState({ value: a });
      if(this.input){
        this.input.value = a;
        this.input.scrollLeft = this.input.scrollWidth;
      }
    }

    let props = null;

    if(keypad.uiName == 'Numpad'){
      props = {
        value: this.state.value,
        onChange: setValue,
        random,
        maxLength,
        extraKey,
        ref: 'pad'
      };
    }else{
      props = {
        value: this.state.value,
        onChange: setValue,
        done: onCancel,
        maxLength,
        ref: 'pad'
      };
    }
    
    const toolbar = (
      <StyleToolbar>
        <div className="right">
          {closeButton && <span onClick={onCancel}>{closeText}</span>}
        </div>
        <div className="center">
          {title}
        </div>
      </StyleToolbar>
    );

    return  (
      <ThemeProvider theme={{mode : dark ? 'dark': 'light'}}>
        <Modal visible={visible} inline={inline} {...rest} ref="modal">
          {toolbar}
          {createElement(keypad, props)}
        </Modal>
      </ThemeProvider>
    );

  }
}
