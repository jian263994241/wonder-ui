import { css } from '../styled';

export const textEllipsis = css `
  word-break: keep-all;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const visible = css `
  visibility: ${props => props.visible ? 'visible': 'hidden'};
  opacity: ${props=>props.visible ? 1: 0};
`

export const display = css `
  display: ${props => props.visible ? 'block': 'none'};
`

export const displayInline = css `
  display: ${props => props.visible ? 'inline-block': 'none'};
`
export const autoScroll = css `
  overflow: auto;
  will-change: scroll-position;
  -webkit-overflow-scrolling: touch;
`

export const borderBox = css `
  box-sizing: border-box;
`

export const disabled = css `
  pointer-events: ${props=>props.disabled ? 'none': 'auto'};
  &[disabled] {
    pointer-events: none;
    cursor: not-allowed;
  }
`

export const createSvgBackground = svgString => css `
  background-image: url(data:image/svg+xml;utf8,${encodeURIComponent(svgString)});
`