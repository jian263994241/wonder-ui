import React, {Component} from 'react';
import styled from 'styled-components';


export const StyleModal = styled.div `
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  z-index: 12500;
`;


export const StyleOverlay = styled.div `
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  z-index: 12000;
  background-color: rgba(0,0,0,.4);
`;
