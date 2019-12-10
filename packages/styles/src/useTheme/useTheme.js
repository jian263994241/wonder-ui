import React from 'react';
import { ThemeContext } from 'theming';

export default function useTheme() {
  return React.useContext(ThemeContext);
}