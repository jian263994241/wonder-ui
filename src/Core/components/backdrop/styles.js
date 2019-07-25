import styled, { css } from 'styled-components';

const invisible = css `
  background-color: transparent;
`

export const WUI_backdrop = styled.div `
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  will-change: opacity;
  contain: strict;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  ${props=>props.invisible && invisible}
`

