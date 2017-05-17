import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {mountedOutside, mounted} from '../utils/mix'
import $ from '../utils/dom'
import Modal from './Modal'

const modalStack = [];

const modalStackClearQueue = function () {
    if (modalStack.length) {
        (modalStack.shift())();
    }
};

export default class Dialog extends Component {
  static uiName = 'Dialog';

  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    afterText: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    buttons: PropTypes.element
  }

  state = {
    opened: false,
    style: {}
  }

  open = ()=>{

    if($('.modal.modal-in:not(.modal-out)').length){
      modalStack.push(()=>{
        this.open();
      });
    }else{
      this.setState({ opened: true }, this.modalTopFix);
    }

  }

  close = ()=>{
    this.setState({
      opened: false
    });
  }

  modalTopFix = ()=> setTimeout(()=>{
    const modal = $(this.refs.Dialog.refs.Modal);
    this.setState({
      style: {
        marginTop: - Math.round(modal.outerHeight() / 2)
      }
    });
  }, 16)

  componentDidMount() {
    this.root = this.refs.Dialog.refs.Root;
  }

  render() {
    const {
      title,
      text,
      afterText,
      className,
      style,
      children,
      buttons,
      ...other
    } = this.props;

    const closedRemoveNode = ()=>{
      $(this.root).remove();
      modalStackClearQueue();
    };

    const cls = classnames('modal', className);

    return (
      <Modal
        className={cls}
        opened={this.state.opened}
        style={Object.assign({}, style, this.state.style)}
        onClosed={closedRemoveNode}
        {...other}
        ref="Dialog"
      >
        <div className="modal-inner">
          {mounted(title, <div className="modal-title"></div>)}
          {mounted(text, <div className="modal-text"></div>)}
          {afterText}
        </div>
        {buttons}
      </Modal>
    );
  }
}


Dialog.alert = function (text, title, callbackOk) {
  if (typeof title === 'function') {
    callbackOk = arguments[1];
    title = undefined;
  }

  const clickOk = ()=>{
    rendered.close();
    callbackOk && callbackOk();
  }

  const buttons = (
    <div className="modal-buttons modal-buttons-1">
      <span className="modal-button modal-button-bold" onClick={clickOk}>确定</span>
    </div>
  )

  const alert = (
    <Dialog title={title} text={text} buttons={buttons}></Dialog>
  )

  const rendered = mountedOutside(alert);

  rendered.open();
};


Dialog.confirm = function (text, title, callbackOk, callbackCancel) {

  if (typeof title === 'function') {
      callbackCancel = arguments[2];
      callbackOk = arguments[1];
      title = undefined;
  }

  const clickOk = ()=>{
    rendered.close();
    callbackOk && callbackOk();
  }

  const clickCancel = ()=>{
    rendered.close();
    callbackCancel && callbackCancel();
  }

  const buttons = (
    <div className="modal-buttons modal-buttons-2">
      <span className="modal-button" onClick={clickCancel}>取消</span>
      <span className="modal-button modal-button-bold" onClick={clickOk}>确定</span>
    </div>
  )

  const confirm = (
    <Dialog title={title} text={text} buttons={buttons}></Dialog>
  )

  const rendered = mountedOutside(confirm);

  rendered.open();
};

Dialog.prompt = function (text, title, callbackOk, callbackCancel) {

  if (typeof title === 'function') {
      callbackCancel = arguments[2];
      callbackOk = arguments[1];
      title = undefined;
  }

  let value = null;

  const clickOk = ()=>{
    rendered.close();
    callbackOk && callbackOk(value);
  }

  const clickCancel = ()=>{
    rendered.close();
    callbackCancel && callbackCancel();
  }

  const buttons = (
    <div className="modal-buttons modal-buttons-2">
      <span className="modal-button" onClick={clickCancel}>取消</span>
      <span className="modal-button modal-button-bold" onClick={clickOk}>确定</span>
    </div>
  )

  const inputField = (e)=>{
    value = e.target.value;
  }

  const afterText = (
    <div className="input-field">
      <input type="text" className="modal-text-input" onChange={inputField}/>
    </div>
  )

  const confirm = (
    <Dialog title={title} text={text} buttons={buttons} afterText={afterText}></Dialog>
  )

  const rendered = mountedOutside(confirm);

  rendered.open();
}

Dialog.toast = function (text, timer, callbackOk){
  if (typeof timer === 'function' || typeof timer === 'undefined') {
    callbackOk = arguments[1];
    timer = 2000;
  }

  const toast = (
    <Dialog text={text} className="toast"></Dialog>
  )

  const rendered = mountedOutside(toast);

  rendered.open();

  setTimeout(()=>{
    rendered.close();
  }, timer);
}

Dialog.showPreloader = function (text, logo = false){

  if(Dialog.showPreloader.rendered) return ;

  const cls = classnames('preloader', {
    'preloader-white': !logo,
    'preloader-kq': logo
  });

  const preloader = logo ? (
    <div style={{position: 'relative'}}>
      <div className={cls}></div>
      {logo && <div className="logo"></div>}
    </div>
  ) : (<div className={cls}></div>);


  const rendered = mountedOutside(
    <Dialog title={preloader} text={text} className="toast" overLayCss="preloader-indicator-overlay"></Dialog>
  );

  Dialog.showPreloader.rendered = rendered;

  rendered.open();
}

Dialog.hidePreloader = function(){
  const {rendered} = Dialog.showPreloader;
  if(rendered){
    rendered.close();
    Dialog.showPreloader.rendered = null;
  }
}
