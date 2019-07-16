import React, {Component} from 'react';
import styled, {css} from 'styled-components';

export const CheckboxIcon = styled.i `
  width: 22px;
  height: 22px;
  position: relative;
  border-radius: 22px;
  border: 1px solid #c7c7cc;
  box-sizing: border-box;
  display: inline-block;
  font-size: 24px;
  line-height: 1;
  text-decoration: none;
  vertical-align: middle;
  margin-left: 3px;
  flex-shrink: 0;
  &::after {
    content: ' ';
    position: absolute;
    left: 50%;
    margin-left: -6px;
    top: 50%;
    margin-top: -4px;
    width: 12px;
    height: 9px;
  }
  input:checked + & , input:checked + div & , .label-checked &{
    border: 0;
    background-color: #E25B55;
  }

  input:checked + &::after, input:checked + div & , .label-checked &::after{
   background: no-repeat center;
   background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9"> <path fill="#fff" d="M12 .7l-.7-.7-7.4 7.4L.7 4.2l-.7.7 3.9 3.9z"/> </svg>');
   background-size: 12px 9px;
  }
`

export const Input = styled.input `
  display: none;
`
