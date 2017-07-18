import React, {Component} from 'react'
import {findDOMNode, render} from 'react-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {mountedOutside, mounted} from '../utils/mix'
import $ from '../utils/dom'
import device from '../utils/device'
import Modal from './Modal'
import Mounter from './Mounter'

let modalLock = false;

const modalStack = [];

const modalStackClearQueue = function () {
  modalLock = false;
  if (modalStack.length) {
      (modalStack.shift())();
  }
};

const addQueue = function(fn){
  if(modalLock){
    modalStack.push(fn);
    return true;
  }
};


export function alert (parmas) {

  if( addQueue( alert.bind(this, parmas) ) ) return true;

  const {title, text, onOk, okText='确定'} = parmas;

  const clickOk = ()=>{
    mounted.updateProps({visible: false}, onOk);
  }

  modalLock = true;

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
        <span className="modal-button modal-button-bold" onClick={clickOk}>{okText}</span>
      </div>
    </Modal>
  );

  function afterClose () {
    mounted.getComponent().getMounter().destroy();
    modalStackClearQueue();
  }

};


export function confirm (parmas) {


  if( addQueue( confirm.bind(this, parmas) ) ) return true;

  const {title, text, onOk, onCancel, okText='确定', cancelText='取消'} = parmas;

  const clickOk = ()=>{
    mounted.updateProps({visible: false}, onOk);
  }

  const clickCancel = ()=>{
    mounted.updateProps({visible: false}, onCancel);
  }

  modalLock = true;

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
        <span className="modal-button" onClick={clickCancel}>{cancelText}</span>
        <span className="modal-button modal-button-bold" onClick={clickOk}>{okText}</span>
      </div>
    </Modal>
  );

  function afterClose () {
    mounted.getComponent().getMounter().destroy();
    modalStackClearQueue();
  }

};

export function prompt(parmas) {


  if( addQueue( prompt.bind(this, arguments) ) ) return true;

  const {title, text, onOk, onCancel, okText='确定', cancelText='取消'} = parmas;

  let value = null;

  const inputField = (e)=>{
    value = e.target.value;
  }

  const clickOk = ()=>{
    mounted.updateProps({visible: false}, onOk.bind(this, value));
  }

  const clickCancel = ()=>{
    mounted.updateProps({visible: false}, onCancel);
  }

  modalLock = true;

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
        <span className="modal-button" onClick={clickCancel}>{cancelText}</span>
        <span className="modal-button modal-button-bold" onClick={clickOk}>{okText}</span>
      </div>
    </Modal>
  );

  function afterClose () {
    mounted.getComponent().getMounter().destroy();
    modalStackClearQueue();
  }
}

export function toast (text, timer, callbackOk){
  if (typeof timer === 'function' || typeof timer === 'undefined') {
    callbackOk = arguments[1];
    timer = 1500;
  }

  if( addQueue( toast.bind(this, arguments) ) ) return true;

  setTimeout(()=>{
    mounted.updateProps({visible: false}, callbackOk);
  }, timer);

  modalLock = true;

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

  function afterClose () {
    mounted.getComponent().getMounter().destroy();
    modalStackClearQueue();
  }
}
