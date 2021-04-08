import * as React from 'react';
import { Theme } from './createTheme';

export interface PickStyleProps<
  Props,
  StylePropKeys extends keyof Props = keyof Props,
  Extra = {}
> {
  styleProps: Required<Pick<Props, StylePropKeys>> & Extra;
}

export interface BaseProps {
  /** element class */
  className?: string;
  /**
   * @description children
   */
  children?: React.ReactNode;
  /**
   * @description Root element
   * @default span
   */
  component?: keyof React.ReactHTML | React.ComponentType;
  /**
   * Theme
   */
  theme?: Theme;
  /**
   * Ref
   */
  ref?: React.Ref<any>;
  /**
   * Element style
   */
  style?: React.CSSProperties;
  /**
   * rest
   */
  [prop: string]: any;
}

export type ClassNameMap<Classes extends string> = Record<Classes, string>;
