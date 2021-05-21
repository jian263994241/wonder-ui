import { isObject, mapObject, css } from '@wonder-ui/utils';

const globalClasses: Record<string, string> = {
  active: 'Wui-active',
  checked: 'Wui-checked',
  disabled: 'Wui-disabled',
  error: 'Wui-error',
  focused: 'Wui-focused',
  focusVisible: 'Wui-focusVisible',
  required: 'Wui-required',
  expanded: 'Wui-expanded',
  selected: 'Wui-selected'
};

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
      return value && (globalClasses[key] || `${name}-${key}`);
    }
  };

  const classes = css(
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
    root: classes && classes.length > 0 ? classes : undefined
  };
}
