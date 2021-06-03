export const globalClasses = {
  active: 'Wui-active',
  activeState: 'Wui-activeState',
  checked: 'Wui-checked',
  disabled: 'Wui-disabled',
  error: 'Wui-error',
  focused: 'Wui-focused',
  focusVisible: 'Wui-focusVisible',
  required: 'Wui-required',
  expanded: 'Wui-expanded',
  selected: 'Wui-selected'
} as const;

export function generateUtilityClass(
  componentName: string,
  slot: string
): string {
  //@ts-expect-error
  const globalPseudoClass = globalClasses[slot];
  return globalPseudoClass ? globalPseudoClass : `${componentName}-${slot}`;
}

export function generateUtilityClasses<T extends string>(
  componentName: string,
  slots: T[]
): Record<T, string> {
  const result: Record<string, string> = {};

  slots.forEach((slot) => {
    result[slot] = generateUtilityClass(componentName, slot);
  });

  return result;
}

/**
 * composeClasses('MenuList', {root: ['root']}, { root: 'my-root'})
 */
export function composeClasses<ClassKey extends string>(
  componentName: string,
  slots: Record<ClassKey, ReadonlyArray<string | false | undefined | null>>,
  classes?: Partial<Record<string, string>>
): Record<ClassKey, string> {
  const output: Record<ClassKey, string> = {} as any;

  const getUtilityClass = (slot: string) =>
    generateUtilityClass(componentName, slot);

  Object.keys(slots).forEach(
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (slot: ClassKey) => {
      output[slot] = slots[slot]
        .reduce((acc, key) => {
          if (key) {
            if (classes && classes[key]) {
              acc.push(classes[key] as string);
            }
            acc.push(getUtilityClass(key));
          }
          return acc;
        }, [] as string[])
        .join(' ');
    }
  );

  return output;
}

/**
 * const styles = generateUtilityStyles(['primary', 'secondary'], (styles, value)=> {
 *  styles[`color-${value}`]: {...}
 * })
 */
export function generateUtilityStyles<T, TResult extends Record<string, any>>(
  names: Array<T> | ReadonlyArray<T>,
  iteratee: (styles: TResult, value: T, index: number) => void
): TResult {
  const result = {} as TResult;

  names.forEach((name: any, index: number) => {
    return iteratee(result, name, index);
  });

  return result;
}
