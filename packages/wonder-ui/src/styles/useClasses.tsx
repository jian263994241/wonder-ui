import * as React from 'react';
import { map } from '@wonder-ui/utils';

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
        if (typeof value === 'string' && key != 'children') {
          return `${name}-${key}-${value}`;
        }

        return value && `${name}-${key}`;
      }),
    [JSON.stringify(styleProps)]
  );

  return {
    ...classesInput,
    root: classes
      .concat(className as string)
      .concat(classesInput.root as string)
      .filter(Boolean)
      .join(' ')
  };
}
