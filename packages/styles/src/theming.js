import React from 'react';
import { createTheming } from 'react-jss';
import defaultTheme from './defaultTheme';

const ThemeContext = React.createContext(defaultTheme);

const theming = createTheming(ThemeContext);

export const ThemeProvider = theming.ThemeProvider;

export default theming;

