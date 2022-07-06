import * as React from 'react';
import CheckListContext from './CheckListContext';
import List from '../List';
import ListHeader from '../ListHeader';
import useThemeProps from '../styles/useThemeProps';
import { useControlled } from '@wonder-ui/hooks';
import type { CheckListProps } from './CheckListTypes';

const COMPONENT_NAME = 'WuiCheckList';

const CheckList = React.forwardRef<HTMLDivElement, CheckListProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      activeIcon,
      children,
      defaultValue = [],
      disableRipple,
      disabled,
      header,
      multiple,
      onChange,
      readOnly,
      value: valueProp,
      ...rest
    } = props;

    const [value, setValueUnControlled] = useControlled({
      defaultValue,
      value: valueProp
    });

    const setValue = (itemValue: string, meta: any) => {
      let newValue;

      if (multiple) {
        const index = value && value.indexOf(itemValue);
        if (value && index >= 0) {
          newValue = [...value];
          newValue.splice(index, 1);
        } else {
          newValue = value ? [...value, itemValue] : [itemValue];
        }
      } else {
        newValue = [itemValue];
      }

      setValueUnControlled(newValue);

      onChange?.(newValue, meta);
    };

    const contextValue = {
      activeIcon,
      disableRipple,
      disabled,
      readOnly,
      value,
      setValue
    };

    return (
      <CheckListContext.Provider value={contextValue}>
        <List ref={ref} role="menu" {...rest}>
          {header && <ListHeader>{header}</ListHeader>}
          {children}
        </List>
      </CheckListContext.Provider>
    );
  }
);

export default CheckList;
