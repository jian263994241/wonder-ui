import * as React from 'react';
import useHandleValue from './useHandleValue';

export interface DataItem {
  label: string;
  value?: any;
  key?: string | number;
}

interface ToggleOptions {
  data: DataItem[];
  exclusive?: boolean;
  value?: any;
  defaultValue?: any;
  onChange? : (value: any) => void
}


interface PropsMap extends DataItem {
  actived: boolean;
  onChange: (value: any) => void;
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

export default function useToggle(options: ToggleOptions): [value: any, props: PropsMap[]] {
  const { data, exclusive, defaultValue, value: valueInput, onChange } = options;
  const [value, setValue] = useHandleValue({
    value: valueInput,
    defaultValue,
    onChange
  });

  const handleChange = (itemValue: any) => {

    const index = value && value.indexOf(itemValue);

    let newValue;

    if (value && index >= 0) {
      newValue = [...value];
      newValue.splice(index, 1);
    } else {
      newValue = value ? [...value, itemValue] : [itemValue];
    }

    setValue(newValue);
  };

  const handleExclusiveChange = (itemValue: any) => {
    setValue(value === itemValue ? null : itemValue);
  };

  const props = data.map((item, index) => {
    return {
      label: item.label,
      value: item.value,
      key: item.key || index,
      actived: isValueSelected(item.value, value),
      onChange: exclusive
        ? handleExclusiveChange.bind(null, item.value)
        : handleChange.bind(null, item.value)
    };
  });

  return [value, props];
}
