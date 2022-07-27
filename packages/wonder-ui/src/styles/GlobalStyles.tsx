import useTheme from './useTheme';
import {
  GlobalStyles as GlobalStylesWithoutDefault,
  GlobalStylesProps
} from '@wonder-ui/styled';

export default function GlobalStyles(props: GlobalStylesProps) {
  const theme = useTheme();

  const { styles, defaultTheme = theme } = props;

  return (
    <GlobalStylesWithoutDefault defaultTheme={defaultTheme} styles={styles} />
  );
}
