import styled, { createGlobalStyle } from 'styled-components';

export const WUI_global = createGlobalStyle `
  html, body, #root {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    z-index: -1;
  }
  body {
    font-family: PingFang SC ,PingHei, DroidSansFallback, Hiragino Sans GB, STHeiti, Roboto, Noto, Helvetica Neue, Helvetica, Arial, SimSun, sans-serif;
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 1.4;
    -webkit-highlight: none;
    -webkit-user-select: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
  }
  @media all and (width:1024px) and (height:691px) and (orientation:landscape) {
    html, body, .root {
        height: 671px;
    }
  }
  @media all and (width:1024px) and (height:692px) and (orientation:landscape) {
      html, body, .root  {
          height: 672px;
      }
  }
`

export const WUI_app = styled.div `
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 1;
`