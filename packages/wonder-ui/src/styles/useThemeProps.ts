import * as React from 'react';
import useTheme from './useTheme';
import getThemeProps from './getThemeProps';
import { Theme } from './styled';

type UseThemePropsParams<T> = {
  props: T;
  name: string;
};

export default function useThemeProps<P = any>({
  props: inputProps,
  name
}: UseThemePropsParams<P>): P & { theme: Theme } {
  const props = { ...inputProps };

  const contextTheme = useTheme();

  const newProps = getThemeProps({ theme: contextTheme, name, props });

  const theme = newProps.theme || contextTheme;

  return {
    ...newProps,
    theme
  };
}
