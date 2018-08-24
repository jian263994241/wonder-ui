import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';
import {mount, unmount} from './DialogBox';

export default function confirm (props = {}) {
  const {
    onOk,
    okText = '确定',
    onCancel,
    cancelText = '取消',
    title,
    text
  } = props;

  const buttons = [
    {
      text: cancelText,
      bold: false,
      onClick: ()=>{
        onCancel && onCancel();
        unmount({title, text, buttons});
      }
    },
    {
      text: okText,
      bold: true,
      onClick: ()=>{
        onOk && onOk();
        unmount({title, text, buttons});
      }
    }
  ]

  mount({title, text, buttons});
}
