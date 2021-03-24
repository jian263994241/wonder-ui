import * as React from 'react';
import { Theme } from './createTheme';
import useThemeProps from './useThemeProps';

export interface additionProps {
  /** emotion as  */
  component?: keyof React.ReactHTML;
  /** element class */
  className?: string;
  /** element style */
  style?: React.CSSProperties;
  /** theme  */
  theme: Theme;

  [key: string]: any;
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
