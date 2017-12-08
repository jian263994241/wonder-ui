import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';
import mount, {unmount} from './mount';


export default function alert (props = {}) {
  const {
    onOk,
    okText = '确定',
    title,
    text
  } = props;

  const buttons = [
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
