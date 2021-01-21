import * as React from 'react';
import { useHandleValue, HandleValueOptions } from './useHandleValue';
import { useEventCallback } from './useEventCallback';
export interface DataItem {
  label: string;
  value: any;
}

export interface ToggleOptions<Value = any | any[]>
  extends HandleValueOptions<Value> {
  data: DataItem[];
  exclusive?: boolean;
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

export function useToggle(options: ToggleOptions) {
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
    onChange,
    ref
  });

  const handleChange = useEventCallback((itemValue: any) => {
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
  });

  const handleExclusiveChange = useEventCallback((itemValue: any) => {
    if (value != itemValue) {
      setValue(itemValue);
    } else {
      setValue();
    }
  });

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
