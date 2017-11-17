
import React, {Component} from 'react';
import {StyleToolbar} from './Styled';



export default function Toolbar (props){
  return <StyleToolbar onTouchMove={e=>e.preventDefault()} {...props}/>
};
