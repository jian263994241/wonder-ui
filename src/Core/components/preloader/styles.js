import styled, { keyframes, css } from 'styled-components';

const spin = keyframes `
  100% {
      transform: rotate(360deg);
  }
`

export const WUI_preloader_root = styled.div `
  box-sizing: border-box;
  position: fixed;
  ${props=> css `top: calc(50% + ${props.navbarHeight}px);`}
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 13500;
  contain: content;
  will-change: transform, opacity;
  color:#fff;
  display: inline-block;
  border-radius: 5px;
  background-color: rgba(0,0,0,0.7);
  padding: 10px;
`;

export const WUI_preloader = styled.div `
  display: inline-block;
  width: 34px;
  height: 34px;
  vertical-align: middle;
  animation: ${spin} 1s steps(12, end) infinite;
`

export const WUI_poreloader_overlay = styled.div `
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0);
  will-change: opacity;
  contain: strict;
  z-index: 13500;
`;