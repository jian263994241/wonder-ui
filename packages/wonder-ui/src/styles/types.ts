import * as React from 'react';

export interface StyleProps<T = any> {
  styleProps: T;
}

export type ClassNameMap<Classes extends string> = Record<Classes, string>;

export type StyledComponentProps<T extends React.ComponentType<any>> = Omit<
  React.ComponentProps<T>,
  'as' | 'styleProps'
> &
  Partial<React.ComponentProps<T>['styleProps']>;

/**
 * @desc Utility type for getting props type of React component.
 * It takes `defaultProps` into an account - making props with defaults optional.
 */
export type PropsOf<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<C, React.ComponentProps<C>>;
