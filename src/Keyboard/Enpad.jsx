import React, {Component, cloneElement} from 'react';
import PropTypes from 'prop-types';

import {StyleKeyboard, StyleEnpadButton} from './Styled';

import Backspace from '../SvgIcon/Backspace';
import Shift from '../SvgIcon/Shift';
import ShiftFill from '../SvgIcon/ShiftFill';

export default class Enpad extends Component {

  static defaultProps = {
    value : ''
  }

  static uiName = 'Enpad';

  state = {
    padId: 'lowerCase'
  }

  constructor(props){
    super(props);

    const renderKeys = this.renderKeys;
    const renderSpecialkey = this.renderSpecialkey;
    const pads = this.pads = {};

    pads['lowerCase'] = (
      <StyleKeyboard>
        <li>
          {renderKeys('qwertyuiop')}
        </li>
        <li>
          {renderKeys('asdfghjkl')}
        </li>
        <li>
          {renderSpecialkey('shift', <Shift/>, this.switchPad('upperCase'))}
          {renderKeys('zxcvbnm')}
          {renderSpecialkey('backspace', <Backspace/>, this.keypress('backspace'))}
        </li>
        <li>
          {renderSpecialkey('numbers', '.?123', this.switchPad('numbers'))}
          {renderSpecialkey('space', '空格', this.keypress('main', ' '))}
          {renderSpecialkey('return', '完成', this.done)}
        </li>
      </StyleKeyboard>
    );

    pads['upperCase'] = (
      <StyleKeyboard>
        <li>
          {renderKeys('QWERTYUIOP')}
        </li>
        <li>
          {renderKeys('ASDFGHJKL')}
        </li>
        <li>
          {renderSpecialkey('shift', <ShiftFill/>, this.switchPad('lowerCase'))}
          {renderKeys('ZXCVBNM')}
          {renderSpecialkey('backspace', <Backspace/>, this.keypress('backspace'))}
        </li>
        <li>
          {renderSpecialkey('numbers', '.?123', this.switchPad('numbers'))}
          {renderSpecialkey('space', '空格', this.keypress('main', ' '))}
          {renderSpecialkey('return', '完成', this.done)}
        </li>
      </StyleKeyboard>
    );

    pads['numbers'] = (
      <StyleKeyboard>
        <li>
          {renderKeys('1234567890')}
        </li>
        <li>
          {renderKeys('-/:()$&@"')}
        </li>
        <li>
          {renderSpecialkey('shift', '#+=', this.switchPad('symbol'))}
          {renderKeys('.,?!\'')}
          {renderSpecialkey('backspace', <Backspace/>, this.keypress('backspace'))}
        </li>
        <li>
          {renderSpecialkey('numbers', 'ABC', this.switchPad('lowerCase'))}
          {renderSpecialkey('space', '空格', this.keypress('main', ' '))}
          {renderSpecialkey('return', '完成', this.done)}
        </li>
      </StyleKeyboard>
    );

    pads['symbol'] = (
      <StyleKeyboard>
        <li>
          {renderKeys('[]{}#%^*+=')}
        </li>
        <li>
          {renderKeys('_\|~<>€£￥⦁')}
        </li>
        <li>
          {renderSpecialkey('shift', '123', this.switchPad('numbers'))}
          {renderKeys('.,?!\'')}
          {renderSpecialkey('backspace', <Backspace/>, this.keypress('backspace'))}
        </li>
        <li>
          {renderSpecialkey('numbers', 'ABC', this.switchPad('lowerCase'))}
          {renderSpecialkey('space', '空格', this.keypress('main', ' '))}
          {renderSpecialkey('return', '完成', this.done)}
        </li>
      </StyleKeyboard>
    );
  }

  renderKeys = keys => keys.split('').map((item, index)=>(
    <StyleEnpadButton key={index} onClick={this.keypress('main', item)} dark={this.props.dark}>{item}</StyleEnpadButton>
  ));

  renderSpecialkey = (keys, name, click) => (
    // <button className={`${styles['specialkey']} ${styles[keys]}`} onClick={click}>{name}</button>
    <StyleEnpadButton className={`specialkey ${keys}`} onClick={click} dark={this.props.dark}>{name}</StyleEnpadButton>
  );

  del = (value)=>{
    return String(value).slice(0, value.length - 1);
  }

  add = (value, key)=>{
    const {maxLength} = this.props;
    if(maxLength && value.length >= maxLength) { return value; }
    return value + key;
  }

  done = ()=>{
    const {done} = this.props;
    done && done();
  }

  keypress = (type, key)=> () => {
    const onChange = this.props.onChange;
    const value = this.props.value;
    switch (type) {
      case 'backspace':
        onChange && onChange(this.del(value));
        break;
      case 'main':
        onChange && onChange(this.add(value, key));
        break;
      default:
    }
  }

  reset = ()=> this.setState({padId: 'lowerCase'});

  switchPad = (id)=> () => this.setState({padId: id});

  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.padId != this.state.padId){
      return true;
    }
    return false;
  }

  render() {

    return this.pads[this.state.padId];

  }
}
