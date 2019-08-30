import React from 'react';
import { ThemeContext } from 'styled-components';
import defaultTheme from './defaultTheme';

/**
 * 提供主题
 */
const useTheme = ()=>{
  const appTheme = React.useContext(ThemeContext);

  return appTheme || defaultTheme;
}


export default useTheme;