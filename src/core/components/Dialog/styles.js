import styled, { css } from 'styled-components';
import {createHairline, removeHairline} from '../styles/hairline';
import { fade } from '../styles/colorManipulator';

export const WUI_dialog_root = styled.div `
  box-sizing: border-box;
  position: ${props=>props.fixed ? 'fixed': 'absolute'};
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0) scale(1.185);
  contain: content;
  width: 270px;
  z-index: 13500;
  border-radius: 13px;
  color: #000;
  text-align: center;
  overflow: hidden;
  will-change: transform,opacity;
  outline: none;
`

export const WUI_dialog_text = styled.div `
  word-wrap: break-word;
  word-break:break-all;
  min-width: 80px;
  color: ${({theme})=> theme.palette.text.secondary };
`

export const WUI_dialog_title = styled.div `
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  color: ${({theme})=> theme.palette.text.primary };
  +${WUI_dialog_text} {
      margin-top: 5px;
  }
`

export const WUI_dialog_body = styled.div `
  padding: 15px;
  border-radius: 13px 13px 0 0;
  position: relative;
  background: rgba(255,255,255,0.95);
  font-size: 14px;
  font-family: inherit;
  ${({noButtons})=> noButtons ? css `border-radius: 13px;`: createHairline('bottom', 'rgba(0,0,0,0.2)').css()}
  ${({toast})=> toast && css `
    display: inline-block;
    border-radius: 5px;
    background: rgba(0,0,0,0.7);
    ${WUI_dialog_text} {
      color: ${({theme})=>theme.palette.getContrastText('rgba(0,0,0,0.7)')};
    }
  `}
`

export const WUI_dialog_button = styled.span `
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
  color: ${({theme, primary})=> primary ? theme.palette.primary.main: fade(theme.palette.text.primary, 0.6)};
  background: rgba(255,255,255,0.95);
  font-weight: 500;
  ${createHairline('right', 'rgba(0,0,0,0.2)').css}

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
    background-color: rgba(230,230,230,0.95);
  }
`

export const WUI_dialog_button_group = styled.div `
  position: relative;
  justify-content:center;
  display: ${props=>props.vertical ? 'block': 'flex'};
  height: ${props=>props.vertical ? 'auto': '44px'};
  ${WUI_dialog_button}{
    ${props => props.vertical && verticalButtons}
  }
`