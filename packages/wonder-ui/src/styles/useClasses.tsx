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
  const classes = map(styleProps, (value, key) => {
    if (key === 'children' && value) {
      return `${name}-withChildren`;
    }

    if (typeof value === 'string' || typeof value === 'number') {
      return `${name}-${key}-${value}`;
    } else if (typeof value === 'boolean') {
      return value && `${name}-${key}`;
    }
  })
    .concat(className as string)
    .concat(classesInput.root as string);

  return {
    ...classesInput,
    root: classes.filter(Boolean).join(' ')
  };
}
