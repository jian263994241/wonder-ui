import * as React from 'react';
import { createTheming, Theming } from 'react-jss';
import defaultTheme, { DefaultTheme } from './theme/defaultTheme';

const ThemeContext_ = React.createContext(defaultTheme)

const theming = createTheming<DefaultTheme>(ThemeContext_)

const { ThemeProvider, context: ThemeContext, useTheme, withTheme } = theming

export type { Theming }

export {
  createTheming,
  ThemeContext,
  withTheme,
  useTheme,
  ThemeProvider,
  theming
};
