import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import theme from 'styled-theming';
import colors, {blue} from './colors';

//base colors
export const color = theme('color', {...colors, default: blue });

//dialog modal
export const modalBg = 'rgba(255,255,255,0.95)';
export const modalButonColor  = color;
export const modalButonActiveBg = 'rgba(230,230,230,0.95)';
export const modalHairlineColor = 'rgba(0,0,0,0.2)';

export const buttonTheme = color;
