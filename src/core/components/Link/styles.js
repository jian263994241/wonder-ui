import styled from 'styled-components';

export const WUI_link = styled.a `
  text-decoration: none;
  outline: none;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  userSelect: none;
  vertical-align: middle;
  appearance: none;
  color: inherit;
  font-size: inherit;
  background: transparent; 
  -webkit-tap-highlight-color: transparent;
 
  &[disabled]{
    pointer-events: none;
    cursor: not-allowed;
  }
`