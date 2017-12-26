import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {buttonTheme} from '../Theme';

const disabledColor = '#CECECE';

const fill = css `
  color:#fff;
  background: ${buttonTheme};
  border-color: transparent;
  html:not(.watch-active-state) &:active, &.active-state {
      background: ${buttonTheme};
  }
`;

const round = css `
  border-radius: 27px;
`

const active = css `
  background: ${buttonTheme};
  color: #fff;
  opacity: 1!important;
`

const big = css `
  font-size: 17px;
  height: 44px;
  line-height: 42px;
`

const block = css `
  width: 100%;
`

const buttonFilldisabled = css `
  &.disabled, &[disabled]{
    background: ${disabledColor};
  }
`
const disabled = css `
  &.disabled, &[disabled]{
    color: ${disabledColor};
    border-color: ${disabledColor};
  }
`

export const StyledButton = styled.button `
  border: 1px solid ${buttonTheme};
  color: ${buttonTheme};
  text-decoration: none;
  text-align: center;
  display: block;
  border-radius: 5px;
  line-height: 27px;
  box-sizing: border-box;
  appearance: none;
  background: none;
  padding: 0 10px;
  margin: 0;
  height: 29px;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  text-overflow:ellipsis;
  font-size: 14px;
  font-family: inherit;
  cursor: pointer;
  outline: 0;
  -webkit-transition: all .2s ease;
  transition: all .2s ease;
  input[type="submit"]&, input[type="button"]&{
      width: 100%;
  }

  html:not(.watch-active-state) &:active, &.active-state {
      opacity: 0.7;
  }

  ${props=>props.fill && fill}

  ${props=>props.fill? buttonFilldisabled : disabled}

  ${props=>props.round && round}

  ${props=>props.active && active}

  ${props=>props.big && big}

  ${props=>props.block && block}

`

StyledButton.defaultProps = {
  theme: {color: 'default'},
};
