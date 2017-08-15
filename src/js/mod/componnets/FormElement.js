import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {Button} from './Buttons'
// import kq from '../utils/kq'

export class FormLabel extends Component {

  static uiName = 'FormLabel'

  static propTypes = {
    className: PropTypes.string
  }

  getElement(){
    return findDOMNode(this);
  }

  render() {
    const {
      className,
      children,
      ...other
    } = this.props;

    const cls = classnames('item-title', 'label', className)

    return (
      <div className={cls} {...other} ref="FormLabel">
        {children}
      </div>
    );
  }
}


export class FormInput extends Component {

  static uiName = 'FormInput'

  static propTypes = {
    cursor: PropTypes.bool,
    cursorStyle: PropTypes.object
  }

  getElement(){
    return findDOMNode(this);
  }

  render() {

    const {type, cursor, cursorStyle, readOnly, ...rest} = this.props;

    let ele;

    switch (type) {
      case 'select':
        ele = <select {...rest} type={type}/>
        break;
      case 'switch':
        ele = <Switch {...rest} type={type}/>
        break;
      case 'range':
        ele = <Range {...rest} type={type}/>
        break;
      case 'textarea':
        ele = <textarea {...rest} type={type}/>
        break;
      default:
        ele = [
          (
            <input
              type={type}
              key=".1"
              ref="input"
              readOnly={readOnly}
              onFocus={(e)=>{ readOnly && e.target.blur() }}
              {...rest}
              />
          ),
          readOnly && (
            <div className={classnames('cursor', {'none': !cursor})} key=".2" >
              <div className="values" style={ Object.assign(( type==='password' ? {visibility: 'visible'}: {}), cursorStyle)}>
                {Array.prototype.map.call(rest.value || '', (a)=>{
                  if(type==='password'){ return '●'; }else{ return a; }
                })}
              </div>
            </div>
          )
        ]
    }

    return (
      <div className="item-input" ref="FormInput">
        {ele}
      </div>
    );
  }
}

export class Switch extends Component {

  static uiName = 'Switch'

  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
  }

  getElement(){
    return findDOMNode(this);
  }

  render() {
    const {
      className,
      style,
      type,
      value,
      ...other
    } = this.props;

    const cls = classnames('label-switch', className);
    return (
      <label className={cls} style={style} ref="Switch">
        <input type="checkbox" {...other} defaultValue="Switch"/>
        <div className="checkbox"></div>
      </label>
    );
  }
}

export class Range extends Component {

  static uiName = 'Range'

  getElement(){
    return findDOMNode(this);
  }

  render() {

    const {
      ...other
    } = this.props;

    return (
      <div className="range-slider" ref="Range">
        <input {...other} />
      </div>
    );
  }
}

export class FormTimerButton extends Component {

  static uiName = 'FormTimerButton'

  static defaultProps = {
    secondsResidue: 60,
    defaultText: '发送验证码',
    text: '%s秒后重新发送'
  }

  state = {
    process: false,
    secondsResidue: 0
  }

  static propTypes = {
    secondsResidue: PropTypes.number,
    defaultText: PropTypes.string,
    text: PropTypes.string,
    onStart: PropTypes.func.isRequired,
    onEnd: PropTypes.func
  }

  componentWillMount() {
    const {secondsResidue} = this.props;
    this.setState({secondsResidue});
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getElement(){
    return findDOMNode(this);
  }

  tick = ()=>{
    const {secondsResidue, onEnd} = this.props;
    this.setState((prevState) => {
      if(prevState.secondsResidue === 0){
        clearInterval(this.interval);
        onEnd && onEnd();
        return {
          process: false,
          secondsResidue
        };
      }
      return {
        secondsResidue: prevState.secondsResidue - 1
      };
    });
  }

  clickHandler = ()=>{

    const {onStart} = this.props;

    onStart(()=>{
      this.interval = setInterval(() => this.tick(), 1000);
      this.setState({
        process: true
      });
    });
  }



  render() {
    const {
      style,
      defaultText,
      text,
      onStart,
      secondsResidue,
      children,
      onClick,
      disabeld,
      ...rest
    } = this.props;

    const content = this.state.process? text.replace(/%s/, this.state.secondsResidue) : defaultText;

    return (
      <div className="item-after">
        <span style={{borderLeft: '1px solid #DEDEDE', height: 30, width:0, display:'block', borderRadius: '0px', WebkitTransform:'scaleX(0.5)'}}></span>
        <Button
          style={{border: 'none', ...style}}
          onClick={this.clickHandler}
          disabled={this.state.process}
          fill={false}
          block={false}
          {...rest}
          >{content}</Button>
      </div>
    );
  }

}
