import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';
import mount, {unmount} from './mount';
import IconSuccess from '../SvgIcon/Success';
import IconClose from '../SvgIcon/CloseOutline';
import IconOffline from '../SvgIcon/Offline';
import IconWarring from '../SvgIcon/Warning';

export default function toast (text = '', callback, icon) {
  const noButtons = true;
  const toast = true;
  const overlayStyle = {
    background: 'rgba(0,0,0,0)'
  };
  const title = icon ;

  mount({title, text, noButtons, toast, overlayStyle}, ()=>{
    setTimeout(()=>{
      unmount({title, text, noButtons, toast, overlayStyle}, callback);
    }, 1500);
  });
}


toast.success = (text, callback)=>toast.call(null, text, callback, <IconSuccess/>);
toast.fail = (text, callback)=>toast.call(null, text, callback, <IconClose/>);
toast.warning = (text, callback)=>toast.call(null, text, callback, <IconWarring/>);
toast.offline = (text, callback)=>toast.call(null, text, callback, <IconOffline/>);
