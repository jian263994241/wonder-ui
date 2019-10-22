import React, {Component} from 'react';
import styled from 'styled-components';

const fontSize = 22;
const rowHeight = 50;
const row = 5;

export const StyleMask = styled.div `
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  margin: 0 auto;
  width: 100%;
  z-index: 4;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), linear-gradient(to top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));
  background-position: top, bottom;
  background-size: 100% 204px;
  background-repeat: no-repeat;
  transform: translateZ(10px);
`


export const StyleIndicator = styled.div `
  box-sizing: border-box;
  width: 100%;
  height: ${rowHeight}px;
  position: absolute;
  left: 0;
  top: 102px;
  z-index: 3;
`

export const StyleItem = styled.div `
  font-size: ${fontSize}px;
  height: ${rowHeight}px;
  line-height: ${rowHeight}px;
  padding: 0 10px;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #000;
  width: 100%;
  box-sizing: border-box;

`

export const StyleContent = styled.div `
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
`

export const StylePickerCol = styled.div `
  display: block;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: ${rowHeight * row}px;
  flex: 1;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
`

export const StylePicker = styled.div `
  display: flex;
  align-items: center;
  width: 100%;
  height: ${rowHeight * row}px;
  background-color: #F8F8F8;
`
