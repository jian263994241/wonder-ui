import * as React from 'react';
import { DefaultTheme } from './defaultTheme';
import ThemeContext from './ThemeContext';

export default function useTheme<Theme = DefaultTheme>(): Theme {
  const theme = React.useContext<Theme>(ThemeContext);

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue(theme);
  }

  return theme;
}
