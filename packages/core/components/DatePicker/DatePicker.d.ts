import * as React from 'react';

export interface DatePickerProps {
  placeholder?: string;
  children?: React.ReactNode;
  extra?: React.ReactNode;
  value?: string | Date;
  onOk?: () => void;
  onCancel?: () => void;
  onChange?: (val: any) => void;
  okText?: string;
  cancelText?: string;
  title?: string;
  mode?: 'date' | 'time' | 'datetime' | 'year' | 'month';
  minDate?: Date;
  maxDate?: Date;
  minHour?: number;
  maxHour?: number;
  minMinute?: number;
  maxMinute?: number;
  use12Hours?: boolean;
  minuteStep?: number;
  format?: string;
  onDateChange?: (val: any) => void;
}

export default function DatePicker(props: DatePickerProps): JSX.Element;
