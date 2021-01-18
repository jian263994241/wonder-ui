import * as React from 'react';

interface InputValueOptions<T = any> {
  defaultValue?: T;
  value?: T;
  onChange?: (value: T) => void;
}

export default function useHandleValue<T = any>(
  options: InputValueOptions<T> = {}
) {
  const { defaultValue, value: valueInput, onChange } = options;

  const [_value, _setValue] = React.useState(defaultValue);

  if (valueInput != undefined && !onChange) {
    console.warn('If value is not undefined. The onChange is required.');
  }

  const value = valueInput || _value;

  const setValue = onChange || _setValue;

  return [value, setValue];
}
