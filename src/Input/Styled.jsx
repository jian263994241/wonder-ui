import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

export const StyledCleanButton = styled.span `
  width: 14px;
  height: 100%;
  opacity: 0;
  pointer-events: auto;
  visibility: hidden;
  transition-duration: .1s;
  position: absolute;
  border-radius: 50%;
  border: none;
  padding: 0;
  margin: 0;
  outline: 0;
  z-index: 1;
  cursor: pointer;
  background: 0 0;
  right: 0;
  top:  0;
  &::before {
    width: 44px;
    height: 44px;
    margin-left: -22px;
    margin-top: -22px;
    position: absolute;
    content: '';
    left: 50%;
    top: 50%;
  }
  &::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 28'><circle cx='14' cy='14' r='14' fill='#8e8e93'/><line stroke='#ffffff' stroke-width='2' stroke-miterlimit='10' x1='8' y1='8' x2='20' y2='20'/><line fill='none' stroke='#ffffff' stroke-width='2' stroke-miterlimit='10' x1='20' y1='8' x2='8' y2='20'/></svg>");
    background-size: 14px 14px;
  }

  &.visible{
    opacity: 1;
    visibility: visible;
  }
`

export const StyledInputInfo = styled.div `
  font-size: 12px;
  line-height: 1.4;
  position: relative;
  margin-bottom: 6px;
  margin-top: -8px;
  color: #8e8e93;
`

export const StyledInputWrap = styled.div `
  margin-top: -8px;
  margin-bottom: -8px;
  margin-left: 5px;
  width: 100%;
  flex-shrink: 1;
  position: relative;

  >input {
    width: 100%;
    height: 44px;
    color: #000;
    font-size: 15px;
    box-sizing: border-box;
    appearance: none;
    border: none;
    box-shadow: none;
    border-radius: 0;
    outline: 0;
    display: block;
    padding: 0;
    margin: 0;
    font-family: inherit;
    background: 0 0;
    resize: none;
    font-size: inherit;
    color: inherit;

    &&::-webkit-input-placeholder{
      color: #ccc;
    }
  }

  input[type="text"],
  input[type="password"],
  input[type="search"],
  input[type="email"],
  input[type="tel"],
  input[type="url"],
  input[type="date"],
  input[type="datetime-local"],
  input[type="time"],
  input[type="number"],
  select {
    height: 44px;
    color: #000;
    font-size: 15px;
  }

  textarea{
    resize: none;
    line-height: 1.4;
    width: 100%;
    height: 45px;
    color: #000;
    font-size: 15px;
    padding-top: 11px;
    padding-bottom: 11px;
    padding-left: 0;
    border: 0
  }

`
