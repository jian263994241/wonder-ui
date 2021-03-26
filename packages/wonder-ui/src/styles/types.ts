import * as React from 'react';
import { Theme } from './createTheme';

export interface StyleProps<T = any> {
  styleProps: T;
}

export interface PickStyleProps<
  Props,
  StylePropKeys extends keyof Props = keyof Props,
  Extra = {}
> {
  styleProps: Required<Pick<Props, StylePropKeys>> & Extra;
}

type AdditionProps = {
  /** root element like emotion's as  */
  component?: keyof JSX.IntrinsicElements;
  /** element class */
  className?: string;
  /** root ref */
  rootRef?: React.Ref<any>;
  /** element style */
  style?: React.CSSProperties;
  /** theme  */
  theme?: Theme;
};

export type InProps<P, More = {}> = AdditionProps & P & More;

export type ClassNameMap<Classes extends string> = Record<Classes, string>;

export type StyledComponentProps<T extends React.ComponentType<any>> = Omit<
  React.ComponentProps<T>,
  'as' | 'styleProps' | 'ref'
> &
  Partial<React.ComponentProps<T>['styleProps']>;

/**
 * @desc Utility type for getting props type of React component.
 * It takes `defaultProps` into an account - making props with defaults optional.
 */
export type PropsOf<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<C, React.ComponentProps<C>>;
