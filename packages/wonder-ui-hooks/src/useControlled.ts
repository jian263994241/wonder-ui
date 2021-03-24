import * as React from 'react';
import useEventCallback from './useEventCallback';

export interface ControlledOptions<T> {
  defaultValue?: T;
  value?: T;
  state?: string;
  name?: string;
}

export function useControlled<V>(options: ControlledOptions<V>) {
  const {
    defaultValue: defaultProp,
    value: controlled,
    state = 'value',
    name
  } = options;
  const { current: isControlled } = React.useRef<boolean>(
    controlled !== undefined
  );
  const [valueState, setValue] = React.useState<V | undefined>(defaultProp);
  const value = isControlled ? controlled : valueState;

  if (process.env.NODE_ENV !== 'production') {
    React.useEffect(() => {
      if (isControlled !== (controlled !== undefined)) {
        console.error(
          [
            `A component is changing the ${
              isControlled ? '' : 'un'
            }controlled ${state} state of ${name} to be ${
              isControlled ? 'un' : ''
            }controlled.`,
            'Elements should not switch from uncontrolled to controlled (or vice versa).',
            `Decide between using a controlled or uncontrolled ${name} ` +
              'element for the lifetime of the component.',
            "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
            'More info: https://fb.me/react-controlled-components'
          ].join('\n')
        );
      }
    }, [state, name, controlled]);
  }

  const { current: defaultValue } = React.useRef(defaultProp);

  React.useEffect(() => {
    if (!isControlled && defaultValue !== defaultProp) {
      console.error(
        [
          `A component is changing the default ${state} state of an uncontrolled component after being initialized. ` +
            `To suppress this warning opt to use a controlled ${name}.`
        ].join('\n')
      );
    }
  }, [JSON.stringify(defaultProp)]);

  const setValueIfUncontrolled = useEventCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  });

  return [value, setValueIfUncontrolled] as const;
}

export default useControlled;
