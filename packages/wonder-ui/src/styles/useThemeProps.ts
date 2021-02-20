import useTheme from './useTheme';
import getThemeProps from './getThemeProps';
import { Theme } from '@wonder-ui/styled';

const stylePropsKeyAlias: Record<string, any> = {
  children: 'withChildren'
};

type UseThemePropsParams<T> = {
  props: T;
  name: string;
  stylePropsKey?: string[];
};

export default function useThemeProps<P = any>({
  props: inputProps,
  name,
  stylePropsKey = []
}: UseThemePropsParams<P>): P & { theme: Theme } {
  const props = { ...inputProps };

  const contextTheme = useTheme();

  const newProps = getThemeProps({ theme: contextTheme, name, props });

  const theme = newProps.theme || contextTheme;

  const className = [`${name}-root`]
    .concat(
      stylePropsKey.map((prop) => {
        if (typeof newProps[prop] === 'string' && prop != 'children') {
          return `${name}-${stylePropsKeyAlias[prop] || prop}-${
            newProps[prop]
          }`;
        }

        return newProps[prop] && `${name}-${stylePropsKeyAlias[prop] || prop}`;
      })
    )
    .concat(newProps.className)
    .filter(Boolean)
    .join(' ');

  return {
    ...newProps,
    theme,
    className
  };
}
