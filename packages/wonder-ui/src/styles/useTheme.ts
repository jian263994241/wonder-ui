import * as React from 'react';
import { getTheme } from './createTheme';
import type { Theme } from './createTheme';

export const ThemeContext = React.createContext<Theme | null>(null);

function isObjectEmpty(obj: object) {
  return Object.keys(obj).length === 0;
}

export function useTheme() {
  const contextTheme = React.useContext(ThemeContext);

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue(contextTheme);
  }

  return !contextTheme || isObjectEmpty(contextTheme)
    ? getTheme()
    : contextTheme;
}

export default useTheme;
