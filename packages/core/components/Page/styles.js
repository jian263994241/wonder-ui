import styled from 'styled-components';

export const PageRoot = styled.div({
  boxSizing: 'border-box',
  position: 'relative',
  width: '100%',
  height: '100%',
  background: props => props.theme.palette.background.default,
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  '& > *': {
    flexShrink: 0
  }
});

export const PageBody = styled.div({
  flexShrink: 1,
  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
});

