import * as React from 'react';
import { Theme } from './createTheme';

export interface PickStyleProps<
  Props,
  StylePropKeys extends keyof Props = keyof Props,
  Extra = {}
> {
  styleProps: Required<Pick<Props, StylePropKeys>> & Extra;
}

export interface BaseProps extends React.AriaAttributes {
  children?: React.ReactNode;
  /**
   * @description Root element
   * @default span
   */
  component?: React.ElementType;
  /**
   * Theme
   */
  theme?: Theme;
  /**
   * Ref
   */
  ref?: React.Ref<any>;
  /**
   * HTML Attributes
   */
  className?: string;
  /**
   * HTML Attributes
   */
  style?: React.CSSProperties;
  /**
   * rest
   */
  [prop: string]: any;
}

export type ClassNameMap<Classes extends string> = Partial<
  Record<Classes, string>
>;
