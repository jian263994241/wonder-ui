import styled from 'styled-components';
import { bindStyles } from '../styledProps';

const styles = bindStyles({
  anchor: {
    left: {
      top: 0,
      left: 0,
      right: 'auto',
      height: '100%',
      borderRight: `1px solid ${props=>props.theme.palette.divider}`
    },
    right: {
      top: 0,
      left: 'auto',
      right: 0,
      height: '100%',
      borderLeft: `1px solid ${props=>props.theme.palette.divider}`
    },
    top: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 'auto',
      maxHeight: '100%',
      borderBottom: `1px solid ${props=>props.theme.palette.divider}`
    },
    bottom: {
      top: 'auto',
      left: 0,
      right: 0,
      bottom: 0,
      maxHeight: '100%',
      borderTop: `1px solid ${props=>props.theme.palette.divider}`
    },
    default: 'right'
  }
});

export const Wrapper = styled.div `
  ${styles.anchor}
  position: absolute;
  overflow: hidden;
  outline: 0;
  box-shadow: ${props=> props.theme.shadows[16]};
  background-color: #fff;
  z-index: ${props=> props.theme.zIndex.drawer};
`

