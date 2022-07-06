import * as React from 'react';
import { getTheme } from './createTheme';
import type { Theme } from './createTheme';

export const ThemeContext = React.createContext<Theme | null>(null);

function isObjectEmpty(obj: object) {
  return Object.keys(obj).length === 0;
}

export function useTheme() {
  const contextTheme = React.useContext(ThemeContext);

  return !contextTheme || isObjectEmpty(contextTheme)
    ? getTheme()
    : contextTheme;
}

export default useTheme;
