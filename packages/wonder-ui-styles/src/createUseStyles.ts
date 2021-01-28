import * as React from 'react';
import type { Styles, ClassNameMap, AnyProps } from './types';
import { DefaultTheme } from './theme/defaultTheme';
import {
  createUseStyles as rjCreateUseStyles,
  Styles as RjStyles,
  Theming
} from 'react-jss';
import { CreateUseStylesOptions } from './types';
import { theming as defaultTheming } from './theming';

export default function createUseStyles<
  Theme = DefaultTheme,
  Props extends object = {},
  ClassKey extends string = string
>(
  styles: Styles<Theme, AnyProps<Props>, ClassKey>,
  options: CreateUseStylesOptions<Theme> = {}
): (data?: Partial<Props>) => ClassNameMap<ClassKey> {
  const { theming = defaultTheming as Theming<any>, ...rest } = options;

  return rjCreateUseStyles<Theme, ClassKey>(styles as RjStyles<ClassKey>, {
    theming,
    ...rest
  });
}
