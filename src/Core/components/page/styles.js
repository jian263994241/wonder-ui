import React from 'react';
import styled,  { css } from 'styled-components';

export const WUI_page = styled.div `
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #F2F2F2;
  z-index: 10;
`

const iosScrollTouch = css `
  -webkit-overflow-scrolling: touch;
`;

export const WUI_pageContent = styled(({iosScrollTouch, ...props})=> <div {...props}/>) `
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  overflow: auto;
  will-change: scroll-position;
  ${ props => props.iosScrollTouch && iosScrollTouch }

  html.device-ios & {
    &::before{
      content:'';
      width: 1px;
      float: left;
      height: ~'calc(100% + 1px)';
      margin-left: -1px;
    }
    &::after{
      content:'';
      width: 100%;
      clear: both;
    }
  }
`
WUI_pageContent.defaultProps = {
  iosScrollTouch: true
}
