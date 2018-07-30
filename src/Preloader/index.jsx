import React, {Component} from 'react';
import DialogBox from '../Dialog/DialogBox';
import {
  StylePreloaderWhite
} from './Styled';

const {mount, unmount} = DialogBox;

const element = document.createElement('div');

const overlayStyle = {background: 'rgba(0,0,0,0)', zIndex: '13800'};
const innerStyle = {padding: '8px'};

let length = 0;

function add (){
  return length = ++length;
}

function remove(){
  return length = --length;
}

export function showPreloader (){

  if(length > 0) return add();

  mount({
    title: (<StylePreloaderWhite/>),
    noButtons: false,
    toast: true,
    innerStyle,
    overlayStyle
  }, add);

}

export function hidePreloader (){

  if(length > 1) return remove();

  unmount();
  remove();
}
