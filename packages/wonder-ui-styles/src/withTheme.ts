import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import getDisplayName from './utils/getDisplayName';
import { DefaultTheme } from './defaultTheme';
import useTheme from './useTheme';
import { PropInjector } from './types';

export interface WithThemeOptions<Theme = DefaultTheme> {
  defaultTheme?: Partial<Theme>;
}

export interface ThemedComponentProps<Theme = DefaultTheme> {
  theme: Theme;
}

export default function withTheme<
  Theme = DefaultTheme,
  Props extends object = {}
>(
  Component: React.ComponentType<Props & ThemedComponentProps<Theme>>,
  options: WithThemeOptions<Theme> = {}
): PropInjector<Props, Partial<ThemedComponentProps<Theme>>> {
  if (process.env.NODE_ENV !== 'production') {
    if (Component === undefined) {
      throw new Error(
        [
          'You are calling withTheme(Component) with an undefined component.',
          'You may have forgotten to import it.'
        ].join('\n')
      );
    }
  }
  const { defaultTheme = {} } = options;

  const WithTheme = React.forwardRef<
    React.ComponentType<Props & Partial<ThemedComponentProps<Theme>>>,
    Props & Partial<ThemedComponentProps<Theme>>
  >(function WithTheme(props, ref) {
    const theme = useTheme<Theme>() || defaultTheme;
    return React.createElement(Component, {
      theme,
      ref,
      ...props
    });
  });

  if (process.env.NODE_ENV !== 'production') {
    WithTheme.displayName = `WithTheme(${getDisplayName(Component)})`;
  }

  hoistNonReactStatics(WithTheme, Component);

  return WithTheme;
}
