import useTheme from './useTheme';
import {
  GlobalStyles as GlobalStylesWithoutDefault,
  GlobalStylesProps as _GlobalStylesProps
} from '@wonder-ui/styled';
import type { Theme } from './createTheme';

export interface GlobalStylesProps
  extends Pick<_GlobalStylesProps<Theme>, 'styles'> {}

export default function GlobalStyles(props: GlobalStylesProps) {
  const theme = useTheme();
  return <GlobalStylesWithoutDefault<Theme> defaultTheme={theme} {...props} />;
}
