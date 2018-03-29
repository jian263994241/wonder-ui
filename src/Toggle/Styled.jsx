import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import createTag from '../utils/createTag';
import {color} from '../Theme';

export const StyledToggleIcon = styled.span `
  z-index: 0;
  margin: 0;
  padding: 0;
  appearance: none;
  border: none;
  position: relative;
  transition: .3s;
  box-sizing: border-box;
  display: block;
  cursor: pointer;
  width: 52px;
  border-radius: 16px;
  height: 32px;
  background: #e5e5e5;
  pointer-events:none;
  &::before{
    position: absolute;
    left: 2px;
    top: 2px;
    width: 48px;
    height: 28px;
    border-radius: 16px;
    box-sizing: border-box;
    background: #fff;
    z-index: 1;
    transition-duration: .3s;
    transform: scale(1);
    content: '';
  }

  &::after {
    background: #fff;
    position: absolute;
    z-index: 2;
    transform: translateX(0);
    transition-duration: .3s;
    height: 28px;
    width: 28px;
    top: 2px;
    left: 2px;
    box-shadow: 0 2px 4px rgba(0,0,0,.3);
    border-radius: 14px;
    content: '';
  }
`

export const StyledToggle = styled.label `
  display: inline-block;
  vertical-align: middle;
  position: relative;
  box-sizing: border-box;
  align-self: center;
  user-select: none;
  width: 52px;
  border-radius: 16px;
  height: 32px;
  input[type=checkbox]{
    display: none;
  }

  input:checked + ${StyledToggleIcon} {
    background: ${color};
  }

  input:checked + ${StyledToggleIcon}:before{
    transform: scale(0);
  }

  input:checked + ${StyledToggleIcon}:after{
    transform: translateX(20px);
  }
`

StyledToggle.defaultProps = {
  theme: {color: 'green'},
}
