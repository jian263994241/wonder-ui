import React, {createElement, cloneElement} from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import Dialog from './Dialog';

const element = document.createElement('div');
const modalStack = [];

let modalLock = false;

function modalStackClearQueue () {
  modalLock = false;
  if (modalStack.length) {
      (modalStack.shift())();
  }
};

function addQueue(fn){
  if(modalLock){
    modalStack.push(fn);
    return true;
  }
};

export default function mount (props, callback) {

  if( addQueue( mount.bind(this, props, callback) ) ) return true;
  modalLock = true;

  render(
    createElement(
      Dialog,
      {
        ...props,
        visible: true
      }
    ),
    element,
    callback
  );
}

function unmount (props, callback) {
  render(
    createElement(
      Dialog,
      {
        ...props,
        visible: false,
        didLeave: ()=> {
          callback && callback();
          unmountComponentAtNode(element);
          modalStackClearQueue()
        }
      }
    ),
    element);
}

export {unmount};
