import * as React from 'react';
import type {
  Styles,
  WithStylesOptions,
  ThemeOfStyles,
  ClassNameMap
} from './types';
import rjWithStyles from 'react-jss';
import { theming as defaultTheming } from './theming';

export interface WithStylesProps<S extends Styles | ((theme: any) => Styles)> {
  classes: Partial<
    ClassNameMap<
      S extends (theme: any) => Styles ? keyof ReturnType<S> : keyof S
    >
  >;
}

type GetProps<C> = C extends React.ComponentType<infer P> ? P : never;

export default function createWithStyles<StylesType extends Styles<any, any>>(
  styles: StylesType,
  options: WithStylesOptions<ThemeOfStyles<StylesType>> = {}
): <C>(
  comp: C
) => React.ComponentType<
  JSX.LibraryManagedAttributes<
    C,
    Omit<GetProps<C>, 'classes'> &
      Partial<WithStylesProps<StylesType>> & {
        innerRef?: React.RefObject<any> | ((instance: any) => void);
      }
  >
> {
  const { theming = defaultTheming as any, ...rest } = options;

  return rjWithStyles(styles, { theming, ...rest }) as any;
}
