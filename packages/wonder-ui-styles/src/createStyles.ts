import { Styles, AnyProps } from './types';
import { DefaultTheme } from './theme/defaultTheme';

export default function createStyles<
  Theme = DefaultTheme,
  Props extends object = {},
  ClassKey extends string = string
>(
  styles: Styles<Theme, AnyProps<Props>, ClassKey>
): Styles<Theme, AnyProps<Props>, ClassKey> {
  return styles;
}
