/* eslint-disable no-restricted-syntax */
import * as React from 'react';

type Params = {
  theme?: any;
  name: string;
  props: React.ComponentProps<any>;
};

/**
 * import { getThemeProps } from '@material-ui/styles';
 */
export default function getThemeProps(params: Params) {
  const { theme, name, props } = params;

  if (
    !theme ||
    !theme.components ||
    !theme.components[name] ||
    !theme.components[name].defaultProps
  ) {
    return props;
  }

  // Resolve default props, code borrow from React source.
  // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221
  const defaultProps = theme.components[name].defaultProps;
  let propName;

  for (propName in defaultProps) {
    if (props[propName] === undefined) {
      props[propName] = defaultProps[propName];
    }
  }

  return props;
}
