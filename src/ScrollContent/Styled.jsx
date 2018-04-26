import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components';
import Loader from '../SvgIcon/Loader';



export const StylePreloaderWhite = styled.div.attrs({
  children: <Loader width="24" color="#999"/>
}) `
  display: ${props=>props.show ? 'block': 'none'};
  padding: 15px;
  text-align: center;
`

StylePreloaderWhite.show = true;
