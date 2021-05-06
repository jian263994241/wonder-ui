import clsx from 'clsx';
import { isObject, mapObject } from '@wonder-ui/utils';

type Options<Classes extends Record<string, string>> = {
  name: string;
  styleProps?: object;
  className?: string;
  classes?: Partial<Classes>;
};

export default function useClasses<
  Classes extends Record<string, string> = {}
>({
  name,
  styleProps = {},
  className,
  classes: classesInput = {}
}: Options<Classes>) {
  const makeClassName = (key: string, value: string | number) => {
    if (key === 'children' && value) {
      return `${name}-withChildren`;
    }
    if (typeof value === 'string' || typeof value === 'number') {
      return `${name}-${key}-${value}`;
    } else if (typeof value === 'boolean') {
      return value && `${name}-${key}`;
    }
  };

  const classes = clsx(
    mapObject(styleProps, (value, key) => {
      if (isObject(value)) {
        return mapObject(value, (value, key) => {
          return makeClassName(key, value);
        });
      } else {
        return makeClassName(key, value);
      }
    }),
    classesInput.root,
    className
  );

  return {
    ...classesInput,
    root: classes.length > 0 ? classes : undefined
  };
}
