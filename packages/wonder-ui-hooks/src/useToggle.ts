import * as React from 'react';
import useHandleValue from './useHandleValue';

export interface DataItem {
  label: string;
  value: any;
}

interface ToggleOptions<Value = any | any[]> {
  data: DataItem[];
  exclusive?: boolean;
  value?: Value;
  defaultValue?: Value;
  onChange?: (value?: Value) => void;
  ref?: React.Ref<Value>;
}

function isValueSelected(value: any, candidate: any) {
  if (candidate === undefined || value === undefined) {
    return false;
  }

  if (Array.isArray(candidate)) {
    return candidate.indexOf(value) >= 0;
  }

  return value === candidate;
}

export default function useToggle(options: ToggleOptions) {
  const {
    data,
    exclusive,
    defaultValue,
    value: valueInput,
    onChange,
    ref
  } = options;

  const [value, setValue] = useHandleValue({
    value: valueInput,
    defaultValue,
    onChange
  });

  React.useImperativeHandle(ref, () => ({ value }));

  const handleChange = (itemValue: any) => {
    let newValue;

    if (value && Array.isArray(value)) {
      const index = value.indexOf(itemValue);
      if (index >= 0) {
        newValue = [...value];
        newValue.splice(index, 1);
      } else {
        newValue = [...value, itemValue];
      }
    } else {
      newValue = [itemValue];
    }

    setValue(newValue);
  };

  const handleExclusiveChange = (itemValue: any) => {
    if (value != itemValue) {
      setValue(itemValue);
    } else {
      setValue();
    }
  };

  const props = data.map((item, index) => {
    return {
      key: index,
      label: item.label,
      value: item.value,
      checked: isValueSelected(item.value, value),
      onChange: exclusive
        ? handleExclusiveChange.bind(null, item.value)
        : handleChange.bind(null, item.value)
    };
  });

  return [props];
}
