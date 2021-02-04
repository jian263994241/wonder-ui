import * as React from 'react';
import useTheme from './useTheme';
import getThemeProps from './getThemeProps';

type UseThemePropsParams = {
  props: React.ComponentProps<any>;
  name: string;
};

export default function useThemeProps({
  props: inputProps,
  name
}: UseThemePropsParams) {
  const props = { ...inputProps };

  const contextTheme = useTheme();

  const newProps = getThemeProps({ theme: contextTheme, name, props });

  const theme = newProps.theme || contextTheme;

  return {
    ...newProps,
    theme
  };
}
