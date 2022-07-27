import * as React from 'react';
import useTheme from './useTheme';
import { Theme } from './createTheme';
import { ThemeProvider as ThemeProviderDefault } from '@wonder-ui/styled';

function mergeOuterLocalTheme<T>(
  outerTheme: T,
  localTheme: Partial<T> | ((outerTheme: T) => T)
): T {
  return typeof localTheme === 'function'
    ? localTheme(outerTheme)
    : { ...outerTheme, ...localTheme };
}

interface ThemeProviderProps<Theme> {
  children?: React.ReactNode;
  theme: Partial<Theme> | ((outerTheme: Theme) => Theme);
}

function ThemeProvider<T = Theme>(
  props: ThemeProviderProps<T>
): React.ReactElement<ThemeProviderProps<T>> {
  const { children, theme: localTheme } = props;
  const outerTheme = useTheme();

  if (process.env.NODE_ENV !== 'production') {
    if (outerTheme === null && typeof localTheme === 'function') {
      console.error(
        [
          'You are providing a theme function prop to the ThemeProvider component:',
          '<ThemeProvider theme={outerTheme => outerTheme} />',
          '',
          'However, no outer theme is present.',
          'Make sure a theme is already injected higher in the React tree ' +
            'or provide a theme object.'
        ].join('\n')
      );
    }
  }

  const theme = React.useMemo(() => {
    const output =
      outerTheme === null
        ? localTheme
        : mergeOuterLocalTheme<any>(outerTheme, localTheme);

    return output;
  }, [localTheme, outerTheme]);

  return <ThemeProviderDefault theme={theme}>{children}</ThemeProviderDefault>;
}

export default ThemeProvider;
