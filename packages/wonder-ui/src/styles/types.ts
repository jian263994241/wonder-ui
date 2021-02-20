import * as React from 'react';

export interface StyleProps<T = any> {
  styleProps: T;
}

export type StyledComponentProps<T extends React.ComponentType<any>> = Omit<
  React.ComponentProps<T>,
  'as' | 'styleProps'
> &
  Partial<React.ComponentProps<T>['styleProps']> & {
    /**
     * @description 渲染的节点类型
     * @default button
     */
    component?: keyof React.ReactHTML;
    /** 相当于 `a` 链接的 `href` 属性，`component`为 `a` 存在时生效 */
    href?: string;
    /** 相当于 `a` 链接的 `target` 属性，`href` 存在时生效 */
    target?: string;
    /** ref */
    ref?: React.Ref<any>;
  };

/**
 * @desc Utility type for getting props type of React component.
 * It takes `defaultProps` into an account - making props with defaults optional.
 */
export type PropsOf<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<C, React.ComponentProps<C>>;
