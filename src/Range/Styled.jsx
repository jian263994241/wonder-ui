import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import createTag from '../utils/createTag';

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

  textarea{
    resize: none;
    line-height: 1.4;
    height: 100px;
    color: #000;
    font-size: 17px;
    padding-top: 11px;
    padding-bottom: 11px;
  }
`

export const StyledRangeSlider = styled.div `
  display: block;
  width: 100%;
  height: 28px;
  position: relative;
  align-self: center;
  cursor: pointer;
  user-select: none;
  input[type=range] {
      display: none;
  }
`

export const StyledRangebar = styled.div `
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  overflow: hidden;
  background: #b7b8b7;
  border-radius: 2px;
  height: 1px;
  >div {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: ${props=>props.color};
  }
`

StyledRangebar.defaultProps = {
  color: '#007aff'
}



export const StyledRangeKnob = styled.div `
  box-sizing: border-box;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,.3);
`

export const StyledRangeKnobLabel = styled.div `
  position: absolute;
  left: 50%;
  bottom: 100%;
  text-align: center;
  transition-duration: 120ms;
  transition-property: transform;
  min-width: 20px;
  height: 20px;
  line-height: 20px;
  background: #fff;
  border-radius: 5px;
  color: #000;
  font-size: 12px;
  margin-bottom: 6px;
  transform: translateX(-50%) translateY(100%) scale(0);

`

export const StyledRangeKnobWrap = styled.div `
  height: 28px;
  width: 28px;
  margin-top: -14px;
  margin-left: -14px;
  z-index: 20;
  position: absolute;
  top: 50%;
  left: 0;

  & ${StyledRangeKnobLabel}.active {
    transform: translateX(-50%) translateY(0%) scale(1);
  }
`
