import * as React from 'react';
import { getDefaultTheme } from './defaultTheme';
import { GlobalStyles as GlobalStylesWithoutTheme } from '@wonder-ui/styled';

export type GlobalStylesProps = React.ComponentProps<
  typeof GlobalStylesWithoutTheme
>;

export function GlobalStyles(props: GlobalStylesProps): JSX.Element {
  return (
    <GlobalStylesWithoutTheme defaultTheme={getDefaultTheme()} {...props} />
  );
}

export default GlobalStyles;
