import * as React from 'react';
import { ThemeContext } from '@wonder-ui/styled';
import defaultTheme from './defaultTheme';
import type { DefaultTheme } from './defaultTheme';

function isEmpty(obj: object) {
  return Object.keys(obj).length === 0;
}

export default function useThemeWithDefaultTheme(): DefaultTheme {
  const contextTheme = React.useContext(ThemeContext) as DefaultTheme;

  return isEmpty(contextTheme) ? defaultTheme : contextTheme;
}
