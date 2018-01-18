import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';
import mount, {unmount} from './mount';
import IconSuccess from '../SvgIcon/Success';
import IconClose from '../SvgIcon/CloseOutline';
import IconOffline from '../SvgIcon/Offline';
import IconWarring from '../SvgIcon/Warning';

export default function toast (text = '', callback, conf = {}) {
  const noButtons = true;
  const toast = true;
  const overlayStyle = {
    background: 'rgba(0,0,0,0)'
  };
  const title = conf.icon ;
  const timeout = conf.timeout != undefined ? conf.timeout : 1500;

  const open = (cb)=>mount({title, text, noButtons, toast, overlayStyle}, cb);
  const close = ()=>{
    unmount();
    callback && callback();
  }

  if(timeout != 0){
    open(()=>setTimeout(close, timeout));
  }else{
    open();
  }

  return close;
}


toast.success = (text, callback)=>toast.call(null, text, callback, {icon: <IconSuccess/>});
toast.fail = (text, callback)=>toast.call(null, text, callback, {icon: <IconClose/>});
toast.warning = (text, callback)=>toast.call(null, text, callback, {icon: <IconWarring/>});
toast.offline = (text, callback)=>toast.call(null, text, callback, {icon: <IconOffline/>});
