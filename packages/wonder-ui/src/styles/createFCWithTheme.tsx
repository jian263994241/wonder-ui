import * as React from 'react';
import { Theme } from './createTheme';
import useThemeProps from './useThemeProps';

export interface additionProps {
  /** emotion as  */
  component?: keyof React.ReactHTML;
  /** 相当于 `a` 链接的 `href` 属性，`component`为 `a` 存在时生效 */
  href?: string;
  /** 相当于 `a` 链接的 `target` 属性，`href` 存在时生效 */
  target?: string;
  /** element class */
  className?: string;
  /** element style */
  style?: React.CSSProperties;
  /** theme  */
  theme: Theme;
}

export default function createFCWithTheme<P = {}, T = any>(
  name: string,
  render: React.ForwardRefRenderFunction<T, P & additionProps>
): React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P & Partial<additionProps>> & React.RefAttributes<T>
> {
  const FC = React.forwardRef<T, P>((inProps, ref) => {
    const props = useThemeProps({ name, props: inProps });

    return render(props, ref);
  });

  FC.displayName = name;

  return FC;
}
