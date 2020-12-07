import * as React from 'react';
import ThemeContext from './ThemeContext';
import { DefaultTheme } from './defaultTheme';
import useTheme from './useTheme';

export interface ThemeProviderProps<Theme = DefaultTheme> {
  children: React.ReactNode;
  theme: Partial<Theme> | ((outerTheme: Theme | null) => Theme);
}

export default function ThemeProvider<T = DefaultTheme>(
  props: ThemeProviderProps<T>
): React.ReactElement<ThemeProviderProps<T>> {
  const { children, theme: localTheme } = props;
  const outerTheme = useTheme<T>();

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
      typeof localTheme === 'function'
        ? localTheme(outerTheme)
        : { ...outerTheme, ...localTheme };

    return output;
  }, [localTheme, outerTheme]);

  return <ThemeContext.Provider children={children} value={theme} />;
}
