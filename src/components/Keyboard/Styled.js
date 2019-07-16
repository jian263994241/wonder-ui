import React, {Component} from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

const keyboardBgColor = theme('mode', {
  light: '#D2D5DB',
  dark: '#6A7286',
})

const toolbarTextColor = theme('mode', {
  light: '#007AFF',
  dark: '#fff',
})

const toolbarBgColor = theme('mode', {
  light: '#BCC4CA',
  dark: '#5A6274',
})

const returnTextColor = theme('mode', {
  light: '#000',
  dark: '#fff',
})

const returnBgColor = theme('mode', {
  light: '#ACAEB4',
  dark: '#F54D4F',
})

const shadowColor = theme('mode', {
  light: '#848688',
  dark: '#6A7286',
})

const spaceBgColor = theme('mode', {
  light: '#ACAEB4',
  dark: '#fff',
})


const StyleToolbar = styled.div `
  font-size: 12px;
  color: ${toolbarTextColor};
  background-color: ${toolbarBgColor};
  height: 44px;
  text-align: center;
  padding: 12px;
  font-size: 16px;
  line-height: 1;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  position: relative;
  &::after{
    content: '';
    clear: both;
    display: block;
    height: 0;
    overflow: hidden;
  }
  .center{
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0 -10px;
    text-align: center;
    white-space: nowrap;
    box-sizing: border-box;
    z-index: 1;
    box-sizing: border-box;
  }
  .left {
    float: left;
    position: relative;
    z-index: 2;

  }
  .right{
    float: right;
    position: relative;
    z-index: 2;
    span, a{
      vertical-align: middle;
    }
  }
`;

const StyleKeyboard = styled.ul `
  width: 100%;
  box-sizing: border-box;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
  user-select: none;
  padding: 5px 0 ;
  background-color: ${keyboardBgColor};
  > li {
    padding: 5px 0;
    display: flex;
    justify-content: center;
  }
`

const StyleButton = styled.div `
  width: ${props=>props.width};
  height: ${props=>props.height};
  display: block;
  color: #000;
  font-size: ${props=>props.fontSize};
  font-family: HelveticaNeue,Helvetica,Arial,sans-serif;
  background-color: #fff;
  text-decoration: none;
  text-align: center;
  outline: none;
  border: 0;
  border-bottom: 1px solid ${shadowColor};
  border-radius: 4px;
  box-sizing: border-box;
  margin: 0 3px;
  padding: ${props=>props.padding};;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &.specialkey {
    background-color: #ACAEB4;
  }
  &.block{
    visibility: hidden;
  }
  &.transparent{
    background-color: transparent;
    border-bottom: none;
  }
  &:active, &.active-state{
    opacity: 0.6;
  }
`;

const StyleEnpadButton = styled(StyleButton).attrs({
  width: '8.6%',
  height: '42px',
  padding: '8px 3px',
  fontSize: '22.5px'
}) `
  > svg{
    position: relative;
    vertical-align: middle;
  }
  &.specialkey {
    font-size: 16px;
    padding: 3px;
    line-height: 2;
  }
  &.backspace, &.shift {
    width: 10%;
    flex-grow:2;
  }
  &.numbers {
    width: 25%;
  }
  &.space {
    flex-grow:2;
    background-color: ${spaceBgColor};
  }
  &.return {
    width: 25%;
    color: ${returnTextColor};
    background-color: ${returnBgColor};
  }
`

const StyleNumpadButton = styled(StyleButton).attrs({
  width: '33%',
  height: '46px',
  padding: '7px 3px',
  fontSize: '25px'
}) `

`

export {
  StyleToolbar,
  StyleKeyboard,
  StyleButton,
  StyleEnpadButton,
  StyleNumpadButton
}
