import styled, { css } from '../styled';
import { textEllipsis, borderBox } from '../styles/utils';
import { createHairline } from '../styles/hairline';

export const HeaderBarRoot = styled('div') `
  width: 100%;
  height: 44px;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  position: relative;
  padding: 0 ${props=> props.spacing}px;
  ${borderBox}
  ${props => props.bordered && createHairline('bottom', '#ddd').css}
`

const commonItemstyle = css `
  font-size: 17px;
  align-self: center;
  
`

export const HeaderBarTitle = styled('div') `
  ${commonItemstyle}
  ${textEllipsis}
  text-align: center;
  flex: 2;
` 

export const HeaderBarLeft = styled('div') `
  ${commonItemstyle}
  word-break: keep-all;
  text-align: left;
  flex: 1;
`

export const HeaderBarRight = styled('div') `
  ${commonItemstyle}
  word-break: keep-all;
  text-align: right;
  flex: 1;
`