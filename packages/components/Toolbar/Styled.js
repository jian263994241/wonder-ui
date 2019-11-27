import hairline from '../styles/hairline';
import React, {Component} from 'react';
import styled from 'styled-components';

export const StyledCenter = styled.div `
  position: absolute;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0 -10px;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
  z-index: 1;
  box-sizing: border-box;
`

export const StyledLeft = styled.div `
  float: left;
  position: relative;
  z-index: 2;
`

export const StyledRight = styled.div  `
  float: right;
  position: relative;
  z-index: 2;
`

export const StyledToolbar = styled.div `
  font-size: 16px;
  color: #000;
  background-color: #fff;
  height: 44px;
  text-align: center;
  padding: 14px;
  line-height: 1;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  position: relative;

  span, a{
    vertical-align: middle;
  }

  a{
    color: #298BEB;
  }

  ${hairline('bottom', '#999')}

  /* &::after{
    content: '';
    clear: both;
    display: block;
    height: 0;
    overflow: hidden;
  } */
`;
