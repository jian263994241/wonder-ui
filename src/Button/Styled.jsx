import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import {buttonTheme} from '../Theme';
const disabledColor = '#CECECE';

const fill = css `
  color:#fff;
  text-fill-color: #fff;
  background: ${buttonTheme};
  border-color: transparent;
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
    text-fill-color: ${disabledColor};
    border-color: ${disabledColor};
  }
`


export const StyledButton = styled.button `
  border: 1px solid ${buttonTheme};
  color: ${buttonTheme};
  text-fill-color: ${buttonTheme};
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
  text-overflow: ellipsis;
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

const row = css `
  ${StyledButton}:last-child {
    border-radius: 0 5px 5px 0;
  }
  ${StyledButton}:first-child:last-child {
    border-radius: 5px;
  }
`
const rowRound = css `
  ${StyledButton}:first-child {
      border-radius: 27px 0 0 27px;
  }
  ${StyledButton}:last-child {
      border-radius: 0 27px 27px 0;
  }
`

export const StyledButtonsRow = styled.div `
  display: flex;
  align-self: center;
  flex-wrap: nowrap;

  ${StyledButton} {
    border-radius: 0 0 0 0;
    border-left-width: 0;
    width: 100%;
    flex:1;
  }

  ${StyledButton}:first-child {
    border-radius: 5px 0 0 5px;
    border-left-width: 1px;
    border-left-style: solid;
  }

  ${props=>props.round ? rowRound : row}

`
