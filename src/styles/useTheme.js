import React from 'react';
import { ThemeContext } from 'styled-components';

export default function useTheme (){
  return React.useContext(ThemeContext) || {};
}