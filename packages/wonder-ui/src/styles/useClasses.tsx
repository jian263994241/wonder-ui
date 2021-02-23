import * as React from 'react';
import { map, isObject } from '@wonder-ui/utils';

type Options<Classes extends Record<string, string>> = {
  name: string;
  styleProps: object;
  className?: string;
  classes?: Partial<Classes>;
};

export default function useClasses<
  Classes extends Record<string, string> = {}
>({
  name,
  styleProps,
  className,
  classes: classesInput = {}
}: Options<Classes>) {
  const classes = React.useMemo(
    () =>
      map(styleProps, (value, key) => {
        if (isObject(value)) return false;

        if (
          (typeof value === 'string' || typeof value === 'number') &&
          key != 'children'
        ) {
          return `${name}-${key}-${value}`;
        }

        return value && `${name}-${key}`;
      })
        .concat(className as string)
        .concat(classesInput.root as string),
    [JSON.stringify(styleProps), className, classesInput.root]
  );

  return {
    ...classesInput,
    root: classes.filter(Boolean).join(' ')
  };
}
