import * as React from 'react';
import type {
  Precision,
  DatePrecision,
  WeekPrecision,
  DatePickerFilter
} from './DatePickerViewTypes';
import * as weekUtils from './weekUtils';
import * as dateUtils from './dateUtils';

//https://github1s.com/ant-design/ant-design-mobile/blob/master/src/components/date-picker/date-picker-utils.ts
export const convertStringArrayToDate = (
  value: (string | null | undefined)[],
  precision: Precision
) => {
  if (precision.includes('week')) {
    return weekUtils.convertStringArrayToDate(value);
  } else {
    return dateUtils.convertStringArrayToDate(value);
  }
};

export const convertDateToStringArray = (
  date: Date | undefined | null,
  precision: Precision
) => {
  if (precision.includes('week')) {
    return weekUtils.convertDateToStringArray(date);
  } else {
    return dateUtils.convertDateToStringArray(date);
  }
};

export const generateDatePickerColumns = (
  selected: string[],
  min: Date,
  max: Date,
  precision: Precision,
  renderLabel: (type: Precision, data: number) => React.ReactNode,
  filter: DatePickerFilter | undefined
) => {
  if (precision.startsWith('week')) {
    return weekUtils.generateDatePickerColumns(
      selected,
      min,
      max,
      precision as WeekPrecision,
      renderLabel,
      filter
    );
  } else {
    return dateUtils.generateDatePickerColumns(
      selected,
      min,
      max,
      precision as DatePrecision,
      renderLabel,
      filter
    );
  }
};

export const defaultRenderLabel = (precision: Precision, data: number) => {
  if (precision.includes('week')) {
    return weekUtils.defaultRenderLabel(precision as WeekPrecision, data);
  } else {
    return dateUtils.defaultRenderLabel(precision as DatePrecision, data);
  }
};
