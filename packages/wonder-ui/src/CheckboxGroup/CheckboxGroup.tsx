import * as React from 'react';
import { CheckboxGroupContext } from './CheckboxGroupContext';
import { useControlled, useEventCallback } from '@wonder-ui/hooks';
import { warn } from '@wonder-ui/utils';

export interface CheckboxGroupProps {
  children?: React.ReactNode;
  /**
   * 默认选中的选项
   */
  defaultValue?: any[];
  /**
   * 指定选中的选项
   */
  value?: any[];
  /**
   * 变化时回调函数
   */
  onChange?: (value: any[]) => void;
  /**
   * 整组失效
   */
  disabled?: boolean;
}

const CheckboxGroup = React.forwardRef<any, CheckboxGroupProps>(
  (props, ref) => {
    const {
      children,
      onChange,
      value: valueProp,
      defaultValue = [],
      disabled
    } = props;

    const [value, setValueIfUnControlled] = useControlled({
      value: valueProp,
      defaultValue
    });

    const isValueSelected = useEventCallback((value2: any[]) => {
      if (Array.isArray(value)) {
        return value.indexOf(value2) > -1;
      }

      return false;
    });

    const handleChange = useEventCallback(function (itemValue) {
      const index = value ? value.indexOf(itemValue) : -1;

      let newValue;

      if (value && !Array.isArray(value)) {
        return warn('CheckboxGroup: Value must be array');
      }

      if (value && index >= 0) {
        newValue = [...value];
        newValue.splice(index, 1);
      } else {
        newValue = value ? [...value, itemValue] : [itemValue];
      }

      setValueIfUnControlled(newValue);

      if (onChange) {
        onChange(newValue);
      }
    });

    return (
      <CheckboxGroupContext.Provider
        value={{ disabled, handleChange, isValueSelected }}
      >
        {children}
      </CheckboxGroupContext.Provider>
    );
  }
);

export default CheckboxGroup;
