const globalPseudoClassesMapping: Record<string, string> = {
  active: 'active',
  checked: 'checked',
  disabled: 'disabled',
  error: 'error',
  focused: 'focused',
  focusVisible: 'focusVisible',
  required: 'required',
  expanded: 'expanded',
  selected: 'selected'
};

export function generateUtilityClass(
  componentName: string,
  slot: string
): string {
  const globalPseudoClass = globalPseudoClassesMapping[slot];
  return (
    'Wui' +
    (globalPseudoClass ? `-${globalPseudoClass}` : `${componentName}-${slot}`)
  );
}

export default function generateUtilityClasses<T extends string>(
  componentName: string,
  slots: T[]
): Record<T, string> {
  const result: Record<string, string> = {};

  slots.forEach((slot) => {
    result[slot] = generateUtilityClass(componentName, slot);
  });

  return result;
}
