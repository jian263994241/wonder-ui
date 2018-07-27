import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';
import {TextInput} from './Styled';
import DialogBox from './DialogBox';

const {mount, unmount} = DialogBox;

export default function prompt (props = {}) {
  const {
    onOk,
    okText = '确定',
    onCancel,
    cancelText = '取消',
    title,
    text
  } = props;

  let input;

  const afterText = <TextInput innerRef={x => { input = x }}/>;

  const buttons = [
    {
      text: cancelText,
      bold: false,
      onClick: ()=>{
        onCancel && onCancel();
        unmount({title, text, afterText, buttons});
      }
    },
    {
      text: okText,
      bold: true,
      onClick: ()=>{
        onOk && onOk(input.value);
        unmount({title, text, afterText, buttons});
      }
    }
  ]

  mount({title, text, afterText, buttons});
}
