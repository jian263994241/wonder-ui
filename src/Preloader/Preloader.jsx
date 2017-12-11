import React, {Component, createElement} from 'react';
import {render} from 'react-dom';
import {StylePreloaderWhite} from './Styled';
import Dialog from '../Dialog/Dialog';

function Preloader (props){
  const overlayStyle = {background: 'rgba(0,0,0,0)', zIndex: '13800'};
  const innerStyle = {padding: '8px'};
  return (
    <Dialog
      noButtons
      toast
      innerStyle={innerStyle}
      overlayStyle={overlayStyle}
      title={<StylePreloaderWhite/>}
      {...props}
    />
  )
}

export default Preloader;
