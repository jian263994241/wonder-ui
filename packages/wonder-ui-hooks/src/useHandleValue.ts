import * as React from 'react';

export interface HandleValueOptions<T = any> {
  defaultValue?: T;
  value?: T;
  onChange?: (value?: T) => void;
  ref?: React.Ref<any>;
}

export function useHandleValue<T = any>(options: HandleValueOptions<T> = {}) {
  const { defaultValue, value: valueInput, onChange, ref } = options;

  const [_value, _setValue] = React.useState(defaultValue);

  if (valueInput != undefined && !onChange) {
    console.warn('If value is not undefined. The onChange is required.');
  }

  const value = valueInput || _value;

  const setValue = onChange || _setValue;

  React.useImperativeHandle(ref, () => ({ value }));

  return [value, setValue];
}
