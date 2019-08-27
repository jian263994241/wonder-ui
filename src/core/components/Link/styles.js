import styled from 'styled-components';

export const WUI_link = styled.button `
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
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
  &[disabled]{
    pointer-events: none;
    cursor: default;
  }
`