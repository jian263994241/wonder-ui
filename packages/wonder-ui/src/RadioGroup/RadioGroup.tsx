import * as React from 'react';
import { RadioGroupContext } from './RadioGroupContext';
import { useControlled, useEventCallback } from '@wonder-ui/hooks';
import { warn } from '@wonder-ui/utils';

export interface RadioGroupProps {
  children?: React.ReactNode;
  /**
   * 默认选中的选项
   */
  defaultValue?: any;
  /**
   * 指定选中的选项
   */
  value?: any;
  /**
   * 变化时回调函数
   */
  onChange?: (value: any) => void;
  /**
   * 整组失效
   */
  disabled?: boolean;
}

const CheckboxGroup = React.forwardRef<any, RadioGroupProps>((props, ref) => {
  const {
    children,
    onChange,
    value: valueProp,
    defaultValue = null,
    disabled
  } = props;

  const [value, setValueIfUnControlled] = useControlled({
    value: valueProp,
    defaultValue
  });

  const isValueSelected = useEventCallback((value2: any) => {
    return value2 === value;
  });

  const handleChange = useEventCallback(function (itemValue) {
    const newValue = value === itemValue ? value : itemValue;
    setValueIfUnControlled(newValue);

    if (onChange) {
      onChange(newValue);
    }
  });

  return (
    <RadioGroupContext.Provider
      value={{ disabled, handleChange, isValueSelected }}
    >
      {children}
    </RadioGroupContext.Provider>
  );
});

export default CheckboxGroup;
