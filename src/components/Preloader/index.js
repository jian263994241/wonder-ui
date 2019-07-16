import React, {Component} from 'react';
import DialogBox from '../Dialog/DialogBox';
import { render } from 'react-dom';
import {
  StylePreloaderWhite
} from './Styled';

const {mount, unmount} = render(<DialogBox/>, document.createElement('div'));

const overlayStyle = {background: 'rgba(0,0,0,0)', zIndex: '13800'};
const innerStyle = {padding: '8px'};

export function showPreloader (){

  mount({
    title: (<StylePreloaderWhite/>),
    noButtons: false,
    toast: true,
    innerStyle,
    overlayStyle
  });

}

export function hidePreloader (){
  unmount();
}
