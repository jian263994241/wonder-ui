import { defaultTheme } from './createTheme';
import { useTheme as useContextTheme } from '@wonder-ui/styled';

function isEmpty(obj: object) {
  return Object.keys(obj).length === 0;
}

export function useTheme() {
  const contextTheme = useContextTheme();

  return !contextTheme || isEmpty(contextTheme) ? defaultTheme : contextTheme;
}

export default useTheme;
