import * as React from 'react';
import styledDefault from '@wonder-ui/styled';
import { tags } from './tags';

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never;

type Tag = ElementType<typeof tags>;

export default function styled(C: Tag | React.ComponentType<any>) {
  let styledComponent;
  if (typeof C === 'string') {
    styledComponent = styledDefault[C];
  } else {
    styledComponent = styledDefault(C);
  }

  styledComponent.defaultProps = {
    theme: { color: 'blue' }
  };

  return styledComponent;
}
