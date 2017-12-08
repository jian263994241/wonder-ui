import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components';
import Loader from '../SvgIcon/Loader';

const spin = keyframes `
  100% {
      transform: rotate(360deg);
  }
`

export const Preloader = styled.div.attrs({
  children: <Loader width="100%"/>
}) `
  display: inline-block;
  width: 34px;
  height: 34px;
  vertical-align: middle;
  animation: ${spin} 1s steps(12, end) infinite;
`
