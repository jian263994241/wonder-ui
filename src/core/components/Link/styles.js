import styled from 'styled-components';

export const WUI_link = styled.button `
  text-decoration: none;
  outline: none;
  margin: 0;
  padding: 0;
  border: 0,
  border-radius: 0;
  cursor: pointer;
  userSelect: none;
  vertical-align: middle;
  appearance: none;
  color: inherit;
  transition: ${
    props => props.theme.transitions.create(['opacity', 'background'], {
      duration: props.theme.transitions.duration.shorter
    })
  };
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  &[type='button']{
    -webkit-appearance: none;
  }
  &[disabled]{
    pointer-events: none;
    cursor: not-allowed;
  }
`