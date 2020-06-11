import React from 'react';
import { createTheming } from 'react-jss';
import defaultTheme from './defaultTheme';

const ThemeContext = React.createContext(defaultTheme);

const theming = createTheming(ThemeContext);

const { withTheme, useTheme, ThemeProvider } = theming;

export default theming;

export { ThemeContext, withTheme, useTheme, ThemeProvider };
