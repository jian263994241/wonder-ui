import React, {Component} from 'react'
import {findDOMNode, render} from 'react-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {mountedOutside, mounted} from '../utils/mix'
import $ from '../utils/dom'
import device from '../utils/device'
import Modal from './Modal'
import Mounter from './Mounter'

const modalStack = [];

const modalStackClearQueue = function () {
    if (modalStack.length) {
        (modalStack.shift())();
    }
};
// if($('.modal.modal-in:not(.modal-out)').length){
//   modalStack.push(()=>{
//     this.open();
//   });
// }else{
//   this.setState({ opened: true }, this.modalTopFix);
// }

export function alert (text, title, callbackOk) {
  if (typeof title === 'function') {
    callbackOk = arguments[1];
    title = undefined;
  }

  const clickOk = ()=>{
    mounted.updateProps({visible: false}, callbackOk);
  }

  const afterClose = ()=>{
    mounted.getComponent().getMounter().destroy();
  }

  const mounted = Mounter.mount(
    <Modal
      visible={true}
      closeByOutside={false}
      afterClose={afterClose}
      fixTop
      mounter
      >
      <div className="modal-inner">
        <div className="modal-title">{title}</div>
        <div className="modal-text">{text}</div>
      </div>
      <div className="modal-buttons modal-buttons-1">
        <span className="modal-button modal-button-bold" onClick={clickOk}>确定</span>
      </div>
    </Modal>
  );
};


export function confirm (text, title, callbackOk, callbackCancel) {

  if (typeof title === 'function') {
      callbackCancel = arguments[2];
      callbackOk = arguments[1];
      title = undefined;
  }

  const clickOk = ()=>{
    mounted.updateProps({visible: false}, callbackOk);
  }

  const clickCancel = ()=>{
    mounted.updateProps({visible: false}, callbackCancel);
  }

  const afterClose = ()=>{
    mounted.getComponent().getMounter().destroy();
  }

  const mounted = Mounter.mount(
    <Modal
      visible={true}
      closeByOutside={false}
      afterClose={afterClose}
      fixTop
      mounter
      >
      <div className="modal-inner">
        <div className="modal-title">{title}</div>
        <div className="modal-text">{text}</div>
      </div>
      <div className="modal-buttons modal-buttons-2">
        <span className="modal-button" onClick={clickCancel}>取消</span>
        <span className="modal-button modal-button-bold" onClick={clickOk}>确定</span>
      </div>
    </Modal>
  );
};

export function prompt(text, title, callbackOk, callbackCancel) {

  if (typeof title === 'function') {
      callbackCancel = arguments[2];
      callbackOk = arguments[1];
      title = undefined;
  }

  callbackOk = callbackOk || function(){};

  let value = null;

  const inputField = (e)=>{
    value = e.target.value;
  }

  const clickOk = ()=>{
    mounted.updateProps({visible: false}, callbackOk.bind(this, value));
  }

  const clickCancel = ()=>{
    mounted.updateProps({visible: false}, callbackCancel);
  }

  const afterClose = ()=>{
    mounted.getComponent().getMounter().destroy();
  }

  const mounted = Mounter.mount(
    <Modal
      visible={true}
      closeByOutside={false}
      afterClose={afterClose}
      fixTop
      mounter
      >
      <div className="modal-inner">
        <div className="modal-title">{title}</div>
        <div className="modal-text">{text}</div>
        <div className="input-field">
          <input type="text" className="modal-text-input" onChange={inputField}/>
        </div>
      </div>
      <div className="modal-buttons modal-buttons-2">
        <span className="modal-button" onClick={clickCancel}>取消</span>
        <span className="modal-button modal-button-bold" onClick={clickOk}>确定</span>
      </div>
    </Modal>
  );
}

export function toast (text, timer, callbackOk){
  if (typeof timer === 'function' || typeof timer === 'undefined') {
    callbackOk = arguments[1];
    timer = 1500;
  }

  const afterClose = ()=>{
    mounted.getComponent().getMounter().destroy();
  }

  setTimeout(()=>{
    mounted.updateProps({visible: false});
  }, timer);

  const mounted = Mounter.mount(
    <Modal
      type="toast"
      visible={true}
      closeByOutside={false}
      afterClose={afterClose}
      fixTop
      mounter
      >
      <div className="modal-inner">
        <div className="modal-text">{text}</div>
      </div>
    </Modal>
  );
}
