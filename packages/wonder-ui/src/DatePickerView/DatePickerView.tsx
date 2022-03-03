import * as React from 'react';
import PickerView from '../PickerView';
import useThemeProps from '../styles/useThemeProps';
import {
  convertDateToStringArray,
  convertStringArrayToDate,
  defaultRenderLabel,
  generateDatePickerColumns
} from './utils';
import { useControlled, useCreation, useEventCallback } from '@wonder-ui/hooks';
import type { DatePickerViewProps } from './DatePickerViewTypes';

const COMPONENT_NAME = 'WuiDatePickerView';

const currentYear = new Date().getFullYear();
const diffYear = 10;
const defaultMinDate = new Date(currentYear - diffYear, 0, 1);
const defaultMaxDate = new Date(currentYear + diffYear, 11, 31);

const DatePickerView = React.forwardRef<HTMLDivElement, DatePickerViewProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      filter,
      minDate = defaultMinDate,
      maxDate = defaultMaxDate,
      precision = 'day',
      onChange,
      onRenderLabel = defaultRenderLabel,
      value: valueProp,
      defaultValue,
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

    const handleChange = useEventCallback((selected: string[]) => {
      onChange?.(convertStringArrayToDate(selected, precision));
    });

    return (
      <PickerView
        ref={ref}
        value={pickerViewValue}
        columns={columns}
        onChange={handleChange}
        {...rest}
      />
    );
  }
);

export default DatePickerView;
