import * as React from 'react';
import type { Styles, WithStylesOptions, ThemeOfStyles } from './types';
import rjWithStyles from 'react-jss'
import { theming as defaultTheming } from './theming'


export default function createWithStyles<StylesType extends Styles<any, any>>(
  styles: StylesType,
  options: WithStylesOptions<ThemeOfStyles<StylesType>> = {}
){
  const { theming = defaultTheming as any, ...rest } = options;

  return rjWithStyles(styles, { theming, ...rest })
}
