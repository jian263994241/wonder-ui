import * as React from 'react';
import Picker from '../Picker';
import useThemeProps from '../styles/useThemeProps';
import {
  convertDateToStringArray,
  convertStringArrayToDate,
  defaultRenderLabel,
  generateDatePickerColumns
} from '../DatePickerView/utils';
import { useControlled, useCreation, useEventCallback } from '@wonder-ui/hooks';
import type { DatePickerProps } from './DatePickerTypes';
import type { PickerAction } from '../Picker/PickerTypes';

const COMPONENT_NAME = 'WuiDatePicker';

const currentYear = new Date().getFullYear();
const diffYear = 10;
const defaultMinDate = new Date(currentYear - diffYear, 0, 1);
const defaultMaxDate = new Date(currentYear + diffYear, 11, 31);

const DatePicker = React.forwardRef<PickerAction, DatePickerProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      filter,
      minDate = defaultMinDate,
      maxDate = defaultMaxDate,
      children,
      onChange,
      onConfirm,
      value: valueProp,
      defaultValue,
      precision = 'day',
      onRenderLabel = defaultRenderLabel,
      ...rest
    } = props;

    const [value] = useControlled({ value: valueProp, defaultValue });

    const pickerViewValue = useCreation(() => {
      return convertDateToStringArray(value, precision);
    }, [value, precision]);

    const columns = useEventCallback((selected) => {
      return generateDatePickerColumns(
        selected,
        minDate,
        maxDate,
        precision,
        onRenderLabel,
        filter
      ).map((column) => ({ values: column }));
    });

    const handleChange = (selected: string[]) => {
      onChange?.(convertStringArrayToDate(selected, precision));
    };

    const confirm = (values: string[]) => {
      return onConfirm?.(convertStringArrayToDate(values, precision));
    };

    return (
      <Picker
        ref={ref}
        value={pickerViewValue}
        columns={columns}
        onChange={handleChange}
        onConfirm={confirm}
        {...rest}
      >
        {({ selected, show }) => {
          return children?.({
            selected: selected
              ? convertStringArrayToDate(
                  selected.map((item: any) => item.value) as string[],
                  precision
                )
              : undefined,
            show
          });
        }}
      </Picker>
    );
  }
);

export default DatePicker;
