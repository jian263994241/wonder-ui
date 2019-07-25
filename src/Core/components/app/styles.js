import styled, { createGlobalStyle } from 'styled-components';

export const WUI_global = createGlobalStyle `
  html, body, #root{
    height: 100%;
    width: 100%;
  }
  #root {
    position: fixed;
    overflow: hidden;
    z-index: 1;
  }
  body {
    font-family: PingFang SC ,PingHei, DroidSansFallback, Hiragino Sans GB, STHeiti, Roboto, Noto, Helvetica Neue, Helvetica, Arial, SimSun, sans-serif;
    margin: 0;
    padding: 0;
    color: #000;
    font-size: 14px;
    line-height: 1.4;
    width: 100%;
    background: #fff;
    overflow: hidden;
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

  * {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-touch-callout:none;
    -webkit-text-size-adjust:100%;
  }

  a, input, textarea, select {
    outline: 0;
  }

  button {
    appearance: none;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: #5399ED;
  }

  p {
    margin: 1em 0;
  }

  img{
    vertical-align: bottom;
    max-width: 100%;
  }
`

export const WUI_app = styled.div `
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 1;
`