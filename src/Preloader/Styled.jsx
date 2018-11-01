import React, {Component} from 'react';
import styled, { css, keyframes } from 'styled-components';
import Loader from '../SvgIcon/Loader';

const spin = keyframes `
  100% {
      transform: rotate(360deg);
  }
`

const spinRule = css `
  ${spin} 1s steps(12, end) infinite;
`

export const StylePreloader = styled.div.attrs({
  children: <Loader width="100%"/>
}) `
  display: inline-block;
  width: 34px;
  height: 34px;
  vertical-align: middle;
  animation: ${spinRule};
`
export const StylePreloaderWhite = styled.div.attrs({
  children: <Loader width="100%" color="#fff"/>
}) `
  display: inline-block;
  width: 34px;
  height: 34px;
  vertical-align: middle;
  animation: ${spinRule};
`
