import * as React from 'react';
import { Theme } from './createTheme';

export interface PickStyleProps<
  Props,
  StylePropKeys extends keyof Props = keyof Props,
  Extra = {}
> {
  styleProps: Required<Pick<Props, StylePropKeys>> & Extra;
}

export type InProps<P> = {
  /** element class */
  className?: string;
  /** root ref */
  rootRef?: React.Ref<any>;
  /** element style */
  style?: React.CSSProperties;
  /** theme  */
  theme?: Theme;
} & P;

export type ClassNameMap<Classes extends string> = Record<Classes, string>;
