import React, {Component} from 'react';
import styled, { keyframes } from 'styled-components';


export const StylePreloaderWrapper = styled.div `
  display: ${props=>props.show ? 'block': 'none'};
  padding: 15px;
  text-align: center;
  font-size: 14px;
  color: #999;
  svg {
    vertical-align: middle;
    margin-right: 3px;
  }
`
