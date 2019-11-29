import styled from '../styled';
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
  ${props=>props.bordered && createHairline('bottom', '#ddd').css}
`

export const HeaderBarTitle = styled('div') `
  font-size: 17px;
  text-align: center;
  align-self: center;
  width: 99%;
  ${textEllipsis}
` 

export const HeaderBarLeftRight = styled('div') `
  align-self: center;
  width: 50px;
  word-break: keep-all;
  overflow: hidden;
`