import styled, { css } from 'styled-components';

const svg = (xml)=> css `
  background-image: url('data:image/svg+xml;charset=utf-8,${xml}');
`
export default svg;
