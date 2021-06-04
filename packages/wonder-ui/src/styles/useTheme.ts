import * as React from 'react';
import defaultTheme from './defaultTheme';
import { ThemeContext } from '@wonder-ui/styled';
import type { Theme } from './createTheme';

function isEmpty(obj: object) {
  return Object.keys(obj).length === 0;
}

export function useTheme(): Theme {
  //@ts-expect-error
  const contextTheme = React.useContext<Theme>(ThemeContext);
  return isEmpty(contextTheme) ? defaultTheme : contextTheme;
}

export default useTheme;
