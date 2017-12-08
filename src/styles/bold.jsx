import styled, { css } from 'styled-components';
import device from '../CreateApp/device';

const bold = css `
  font-weight: 500;
  html.ios-gt-8 & {
      font-weight: 600;
  }
`

export default bold;
