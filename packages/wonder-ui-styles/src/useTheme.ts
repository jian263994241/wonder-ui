import * as React from 'react';
import ThemeContext from './ThemeContext';

export default function useTheme<T>(context?: React.Context<T>) {
  return React.useContext(context || ThemeContext);
}
