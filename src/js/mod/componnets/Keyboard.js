import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import $ from '../utils/dom'
import PickerModal from './PickerModal'
import {Toolbar} from './Bars'


export default class Keyboard extends Component {

  static uiName = 'Keyboard';

  static propTypes = {
    className: PropTypes.string,
    opened: PropTypes.bool,
    inline: PropTypes.bool,
    logo: PropTypes.bool,
    dot: PropTypes.bool,
    onKeyDown: PropTypes.func,
    closeBtn: PropTypes.bool,
    random: PropTypes.bool
  }

  state = {
    opened: false
  }

  close = ()=>{
    this.setState({opened: false});
  }

  componentDidMount() {
    const {opened} = this.props;
    this.setState({opened});
  }

  componentWillReceiveProps(nextProps) {
    const {opened} = nextProps;
    this.setState({opened});
  }

  render() {

    const {
      className,
      opened,
      inline,
      logo,
      dot,
      closeBtn,
      onKeyDown,
      random,
      children,
      ...other
    } = this.props;

    const cls = classnames({
      'picker-keypad': true,
      'picker-keypad-type-numpad': true,
      'picker-modal-inline': inline
    }, className);

    let keys = [1,2,3,4,5,6,7,8,9];

    if(random){
      keys.sort(function(){ return 0.5 - Math.random() })
    }

    if(dot){
      keys = keys.concat(['.' ,0,'del']);
    }else{
      keys = keys.concat([null ,0,'del']);
    }


    const keyInit = (key) => {
      const empty = (key === null);
      const del = (key === 'del');
      const close = (key === 'close');

      const keyCss = classnames({ 'picker-keypad-button': true, 'picker-keypad-block': empty, 'picker-keypad-dummy-button': empty, 'picker-keypad-delete': del });

      let inner ;
      if(empty){
        inner = null;
      }else if(del){
        inner = ( <i className="icon icon-keypad-delete"></i> );
      }else{
        inner = ( <div className="picker-keypad-button-number">{key}</div> );
      }

      const keyChange = ()=>{
        if(key != null && !close && onKeyDown) onKeyDown(String(key));
      }

      return (
        <div className={keyCss} key={key} onClick={keyChange}>{inner}</div>
      );
    }


    const toolbar = (
      <Toolbar>
        <div className="left"></div>
        {logo && (<div className="center"> <div className="picker-keypad-logo">飞凡通安全键盘</div> </div>)}
        <div className="right">{closeBtn && !inline && (<div className="picker-keypad-close" onClick={this.close}><span className="icon icon-down-nav"></span></div>)}</div>
      </Toolbar>
    )


    return (
      <PickerModal className={cls} innerClassName="picker-keypad-buttons" opened={!inline && this.state.opened} toolbar={toolbar} {...other}>
        {keys.map(keyInit)}
      </PickerModal>
    );
  }
}

class Input extends Component {

  static uiName = 'Keyboard.Input';

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string.isRequired,
    show: PropTypes.bool
  }

  render() {

    const {
      value,
      show
    } = this.props;

    const val = [];

    for(let i=0; i<6; i++){
      if(value[i] === undefined){
        val.push('');
      }else{
        val.push(value[i]);
      }
    }

    const grid = (n, i)=>{
      const num = (!show && n !='') ? '\u25cf': n;
      return <i key={i}>{num}</i>;
    }

    return (
      <div className="input-pwd-grid">
        {val.map(grid)}
      </div>
    );
  }
}

Keyboard.Input = Input;
