import { createGlobalStyle } from 'styled-components';

export const WUI_global = createGlobalStyle `
  body {
    margin: 0;
    padding: 0;
    font-size: ${props=>props.theme.typography.fontSize}px;
    touch-action: manipulation;
    user-select: none;
    -webkit-highlight: none;  
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
  }
`
