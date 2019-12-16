import styled from 'styled-components';
import { bindStyles } from '../styledProps';

const styles = bindStyles({
  anchor: {
    left: {
      top: 0,
      left: 0,
      right: 'auto',
      borderRight: `1px solid ${props=>props.theme.palette.divider}`
    },
    right: {
      top: 0,
      left: 'auto',
      right: 0,
      borderLeft: `1px solid ${props=>props.theme.palette.divider}`
    },
    top: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 'auto',
      height: 'auto',
      maxHeight: '100%',
      borderBottom: `1px solid ${props=>props.theme.palette.divider}`
    },
    bottom: {
      top: 'auto',
      left: 0,
      right: 0,
      bottom: 0,
      height: 'auto',
      maxHeight: '100%',
      borderTop: `1px solid ${props=>props.theme.palette.divider}`
    }
  }
});

export const Wrapper = styled.div `
  ${styles.anchor}
  position: absolute;
  height: 100%;
  overflow: hidden;
  outline: 0;
  box-shadow: ${props=> props.theme.shadows[16]};
  background-color: #fff;
  z-index: ${props=> props.theme.zIndex.drawer};
`

