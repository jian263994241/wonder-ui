import styled, { css } from 'styled-components';


const anchorLeft = css `
  left: 0;
  right: auto;
  border-right: 1px solid ${props=>props.theme.palette.divider};
`

const anchorRight = css `
  left: auto;
  right: 0;
  border-left: 1px solid ${props=>props.theme.palette.divider};
`

const anchorTop = css `
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  height: auto;
  max-height: 100%;
  border-bottom: 1px solid ${props=>props.theme.palette.divider};
`

const anchorBottom = css `
  top: auto;
  left: 0;
  right: 0;
  bottom: 0;
  height: auto;
  max-height: 100%;
  border-top: 1px solid ${props=>props.theme.palette.divider};
`

export const Wrapper = styled.div `
  position: absolute;
  height: 100%;
  z-index: ${props=> props.theme.zIndex.drawer};
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  outline: 0;
  top: 0;
  box-shadow: ${props=> props.theme.shadows[16]};
  ${props=> props.anchor === 'left' && anchorLeft}
  ${props=> props.anchor === 'right' && anchorRight}
  ${props=> props.anchor === 'top' && anchorTop}
  ${props=> props.anchor === 'bottom' && anchorBottom}
`

