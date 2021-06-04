import * as React from 'react';
import theme from './defaultTheme';
import { GlobalStyles as GlobalStylesWithoutTheme } from '@wonder-ui/styled';

export type GlobalStylesProps = React.ComponentProps<
  typeof GlobalStylesWithoutTheme
>;

export function GlobalStyles(props: GlobalStylesProps): React.ReactElement {
  return <GlobalStylesWithoutTheme defaultTheme={theme} {...props} />;
}

export default GlobalStyles;
