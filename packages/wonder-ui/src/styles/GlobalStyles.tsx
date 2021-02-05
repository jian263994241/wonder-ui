import * as React from 'react';
import { GlobalStyles } from '@wonder-ui/styled';
import theme from './theme/defaultTheme';

const GlobalStylesWithDefault: React.FC<React.ComponentProps<
  typeof GlobalStyles
>> = (props) => {
  return <GlobalStyles defaultTheme={theme} {...props} />;
};

export default GlobalStylesWithDefault;
