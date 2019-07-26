import styled from 'styled-components';

export const WUI_page_root = styled.div `
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${({theme})=>theme.palette.background.default};
  z-index: 10;
`

export const WUI_page_content = styled.div `
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
  will-change: scroll-position;
  -webkit-overflow-scrolling: touch;

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

