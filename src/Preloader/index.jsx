import React, {Component, createElement} from 'react';
import {render} from 'react-dom';

import Preloader from  './Preloader';

const element = document.createElement('div');

let length = 0;

function add (){
  return length = ++length;
}

function remove(){
  return length = --length;
}

export function showPreloader (){

  if(length > 0) return add();

  render(
    createElement(
      Preloader,
      { visible: true }
    ),
    element,
    add
  );
}

export function hidePreloader (){

  if(length > 1) return remove();

  render(
    createElement(
      Preloader,
      { visible: false }
    ),
    element,
    remove
  );
}

export default Preloader;
