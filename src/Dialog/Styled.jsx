import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {modalButonColor, modalButonActiveBg, modalBg, modalHairlineColor} from '../Theme';
import hairline, {removeHairline} from '../styles/hairline';
import bold from '../styles/bold';

export const ModalInner = styled.div `
  padding: 15px;
  border-radius: 13px 13px 0 0;
  position: relative;
  background: ${modalBg};
  ${hairline('bottom', modalHairlineColor)}
`

export const ModalText = styled.div `
  word-wrap: break-word;
  word-break:break-all;
  min-width: 80px;
`;


export const ModalTitle = styled.div `
  font-size: 18px;
  text-align: center;
  ${bold}
  +${ModalText} {
      margin-top: 5px;
  }
`

export const Button = styled.span `
  width: 100%;
  padding: 0 5px;
  height: 44px;
  font-size: 17px;
  line-height: 44px;
  text-align: center;
  display: block;
  position: relative;
  white-space: nowrap;
  text-overflow:ellipsis;
  overflow: hidden;
  cursor: pointer;
  box-sizing: border-box;
  flex:1;
  border: none;
  border-radius: 0;
  outline: none;
  color: ${modalButonColor};
  background: rgba(255,255,255,0.95);
  ${hairline('right', modalHairlineColor)}
  ${props => props.bold && bold}

  &:first-child {
      border-radius: 0 0 0 13px;
  }
  &:last-child {
      ${removeHairline('right')}
      border-radius: 0 0 13px 0;
  }
  &:first-child:last-child {
      border-radius: 0 0 13px 13px;
  }
  &:active, &.active-state{
    background-color: ${modalButonActiveBg};
  }

`
Button.defaultProps = {
  theme: {mode: 'default'},
};

const verticalButtons = css `
  border-radius: 0;
  ${removeHairline('right')}
  ${removeHairline('top')}
  ${hairline('bottom', modalHairlineColor)}
  &:last-child {
     border-radius: 0 0 13px 13px;
     ${removeHairline('bottom')}
  }
`

export const ButtonGroup = styled.div `
  position: relative;
  display: ${props=>props.vertical ? 'block': 'flex'};
  justify-content:center;
  height: ${props=>props.vertical ? 'auto': '44px'};
  ${Button}{
    ${props => props.vertical && verticalButtons}
  }
`


const noButtons = css `
  ${ModalInner} {
    border-radius: 13px;
    ${removeHairline('bottom')}
  }
  ${ButtonGroup} {
    display: none;
  }
`
const toast = css `
  ${ModalInner} {
    color:#fff;
    display: inline-block;
    border-radius: 5px!important;
    background: rgba(0,0,0,0.7);
  }
`

export const ModalMixin = styled.div `
  width: 270px;
  z-index: 13500;
  color: #000;
  border-radius: 13px;
  text-align: center;
  overflow: hidden;
  ${props=>props.noButtons && noButtons}
  ${props=>props.toast && toast}
`

export const TextInput = styled.input `
  box-sizing: border-box;
  height: 26px;
  background: #fff;
  margin: 0;
  margin-top: 15px;
  padding: 0 5px;
  border: 1px solid rgba(0,0,0,0.3);
  border-radius: 0;
  width: 100%;
  font-size: 14px;
  font-family: inherit;
  display: block;
  box-shadow: 0 0 0 rgba(0,0,0,0);
  appearance: none;
  + & {
    margin-top: 5px;
  }
`
