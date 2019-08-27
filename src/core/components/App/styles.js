import styled, { createGlobalStyle } from 'styled-components';

export const WUI_global = createGlobalStyle `
  body {
    margin: 0;
    padding: 0;
    font-size: ${props=>props.theme.typography.fontSize}px;
    -webkit-highlight: none;
    -webkit-user-select: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
  }
  html, body, #root {
    height: 100%;
    width: 100%;
    position: relative;
  }
`

export const WUI_app = styled.div `
  height: 100%;
  width: 100%;
  overflow: hidden;
`