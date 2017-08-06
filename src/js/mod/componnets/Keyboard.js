import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import $ from 'dom7'
import {PickerModal} from 'f7-modal'
import {Toolbar} from './Bars'
import kq from '../utils/kq'

export default class Keyboard extends Component {

  static uiName = 'Keyboard';

  static propTypes = {
    className: PropTypes.string,
    inline: PropTypes.bool,
    dot: PropTypes.bool,
    onChange: PropTypes.func,
    random: PropTypes.bool,
    number: PropTypes.bool,
    maxLength: PropTypes.number,
    value: React.PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ])
  }

  static encrypt = (value)=>{
    const baseurl = location.port === "8080" ? (location.origin + "/coc-bill-api/") : "https://ebd.99bill.com/coc-bill-api/";
    if(!window.Safety) throw '缺少safe mod';
    const safety = new window.Safety();
    return kq.api({
      method: 'post',
      url: baseurl + '3.0/pgh/keys',
      business: 'MEMBER-BASE'
    })
    .then(({mapString, mcryptKey, token})=>{
      safety.setMap(mapString, mcryptKey);
      const result = safety.toX(value);
      return Promise.resolve({result, token});
    })
  }

  valueFormat = (value , key, maxLength)=>{
    let val = String(value);
    key = String(key);

    if(key === 'del'){
      return val.slice(0, val.length - 1);
    }

    if(maxLength && val.length >= maxLength) {
      return val;
    }

    if(key === '.' && val.indexOf('.') > -1){
      return val;
    }

    return val + key ;
  }

  getkeys = (extraKeys, random) =>{
    let keys = [1,2,3,4,5,6,7,8,9,0];

    if(random){
      keys.sort(function(){ return 0.5 - Math.random() });
    }

    keys.splice(keys.length - 1, 0 , extraKeys[0])
    keys.push(extraKeys[1]);

    return keys;
  }

  constructor(props){
    super(props);
    const {inline, number, random, dot} = props;

    const _closeBtn = !inline && !number;

    if(_closeBtn){
      this.keys = this.getkeys(['close','del'], random);
    }else if(dot){
      this.keys = this.getkeys(['.', 'del'], random);
    }else{
      this.keys = this.getkeys([null, 'del'], random);
    }
  }

  render() {

    const {
      className,
      inline,
      number,
      visible,
      dot,
      value,
      maxLength,
      onChange,
      random,
      onCancel,
      children,
      ...other
    } = this.props;

    const _inline = inline && !number;
    const _closeBtn = !inline && !number;

    let inner ;

    const keyInit = (key) => {
      const keyCss = classnames({
        'picker-keypad-button': true,
        'picker-keypad-dummy-button': key === null,
        'picker-keypad-delete': key === 'del'
      });

      switch (key) {
        case null:
          inner = null;
          break;
        case 'close':
          inner = <div className="picker-keypad-button-close"></div>;
          break;
        case 'del':
          inner = ( <div className="icon icon-keypad-delete"></div> );
          break;
        default:
          inner = ( <div className="picker-keypad-button-number">{key}</div> )
      }

      const keyChange = ()=>{
        if(typeof key === 'number' || key=== 'del' || key === '.'){
          const val = this.valueFormat(value, key , maxLength);
          if(value != val && onChange){
            onChange(val);
          }

        }else if(key === 'close'){
          onCancel && onCancel();
        }
      }

      return (
        <div className={keyCss} key={key} onClick={keyChange}>{inner}</div>
      );
    }

    const toolbar = number ? (
      <Toolbar>
        <div className="left"></div>
        <div className="right">
          <div className="picker-keypad-close" onClick={onCancel}>
            <span className="icon icon-down-nav"></span>
          </div>
        </div>
      </Toolbar>
    ): (
      <Toolbar>
        <div className="left"></div>
        <div className="center"> <div className="picker-keypad-logo">飞凡通安全键盘</div> </div>
        <div className="right"></div>
      </Toolbar>
    );

    const cls = classnames({
      'picker-keypad': true,
      'picker-keypad-type-numpad': true,
      'picker-modal-inline': inline
    }, className);

    return (
      <PickerModal
        className={cls}
        containerCss="kq-keyboard"
        onCancel={onCancel}
        innerCss="picker-keypad-buttons"
        toolbar={toolbar}
        mounter={!_inline}
        visible={_inline || visible}
        overlay={false}
        {...other}
        >
        {this.keys.map(keyInit)}
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
      show,
      ...other
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
      <div className="input-pwd-grid" {...other}>
        {val.map(grid)}
      </div>
    );
  }
}

Keyboard.Input = Input;
