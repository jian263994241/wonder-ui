import * as React from 'react';
import { ThemeContext } from '@wonder-ui/styled';
import defaultTheme from './theme/defaultTheme';

export default function useThemeWithDefaultTheme() {
  const contextTheme = React.useContext(ThemeContext);

  return { ...defaultTheme, ...contextTheme };
}
