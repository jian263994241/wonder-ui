import useTheme from './useTheme';
import getThemeProps from './getThemeProps';

type UseThemePropsParams<P> = {
  props: P;
  name: string;
};

export default function useThemeProps<P extends object = {}>({
  props: inputProps,
  name
}: UseThemePropsParams<P>): P {
  const props = { ...inputProps };

  const contextTheme = useTheme();

  const newProps = getThemeProps({ theme: contextTheme, name, props });

  const theme = newProps.theme || contextTheme;

  return {
    ...newProps,
    theme
  };
}
