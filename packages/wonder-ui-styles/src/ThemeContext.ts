import * as React from 'react';
import defaultTheme from './defaultTheme';

const ThemeContext = React.createContext<any>(defaultTheme);

if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'ThemeContext';
}

export default ThemeContext;
