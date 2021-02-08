export type StyleTypeProps<
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = Omit<Partial<React.ComponentProps<T>>, 'as'> & {
  /**
   * @ignore
   */
  ref?: React.Ref<any>;
  /**
   * @description 渲染的节点类型
   * @default button
   */
  component?: keyof React.ReactHTML;
  /** 相当于 `a` 链接的 `href` 属性，`component`为 `a` 存在时生效 */
  href?: string;
  /** 相当于 `a` 链接的 `target` 属性，`href` 存在时生效 */
  target?: string;
};
