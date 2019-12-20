import React from 'react';
import Bouncefix from './Bouncefix';
import styled from '../styled';

const ScrollContent = styled(Bouncefix) `
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  will-change: scroll-position;
  -webkit-overflow-scrolling: touch;
`;


export default ScrollContent;


