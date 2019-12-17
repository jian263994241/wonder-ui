import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle `
  html, body, #root, #react-app {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`

export const RouterRoot = styled.div.withConfig({
  displayName: 'RouterRoot'
})({
  height: '100%',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
});
