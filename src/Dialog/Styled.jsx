import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {modalButonColor, modalButonActiveBg, modalBg, modalHairlineColor} from '../Theme';
import hairline, {removeHairline} from '../StyleMixins/Hairline';

export const ModalMixin = styled.div `
  width: 270px;
  left: 50%;
  margin-left: -135px;
  z-index: 13500;
  color: #000;
  border-radius: 13px;
  text-align: center;
  overflow: hidden;
`

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
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  html.ios-gt-8 & {
      font-weight: 600;
  }
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

export const ButtonGroup = styled.div `
  position: relative;
  display: ${props=>props.vertical ? 'block': 'flex'};
  justify-content:center;
  height: ${props=>props.vertical ? 'auto': '44px'};
`
