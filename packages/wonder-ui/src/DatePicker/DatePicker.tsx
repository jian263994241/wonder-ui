import * as React from 'react';
import Picker, { PickerAction, PickerProps } from '../Picker';
import {
  clamp,
  createArray,
  isDate,
  nextTick,
  padZero
} from '@wonder-ui/utils';
import { getBoundary, getMonthEndDay, getTrueValue } from './utils';
import {
  useEventCallback,
  useForkRef,
  useMount,
  useUpdateEffect
} from '@wonder-ui/hooks';

type ColumnType = 'year' | 'month' | 'day' | 'hour' | 'minute';

export interface DatePickerProps extends Omit<PickerProps, 'columns'> {
  type?: 'date' | 'datetime' | 'datehour' | 'month-day' | 'year-month';
  currentDate?: Date;
  minDate?: Date;
  maxDate?: Date;
  filter?(type: ColumnType, values: string[]): string[];
  formatter?(type: ColumnType, value: string): string;
  onChange?(value: Date): void;
  onConfirm?(value: Date): void;
  onCancel?(): void;
}

const currentYear = new Date().getFullYear();
const diffYear = 10;

const defaultFormatter = (type: ColumnType, value: string) => value;

const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  (props, ref) => {
    const {
      actionRef: actionRefProp,
      filter,
      formatter = defaultFormatter,
      type = 'datetime',
      currentDate: valueProp,
      minDate = new Date(currentYear - diffYear, 0, 1),
      maxDate = new Date(currentYear + diffYear, 11, 31),
      onChange,
      onConfirm,
      onCancel,
      ...rest
    } = props;

    const formatValue = (value?: Date) => {
      if (isDate(value)) {
        const timestamp = clamp(
          value.getTime(),
          minDate.getTime(),
          maxDate.getTime()
        );
        return new Date(timestamp);
      }

      return undefined;
    };

    const currentDateRef = React.useRef(formatValue(valueProp));
    const actionRef = React.useRef<PickerAction>(null);
    const handleActionRef = useForkRef(actionRef, actionRefProp);

    const ranges = React.useMemo(() => {
      const max = getBoundary(
        'max',
        maxDate,
        currentDateRef.current || minDate
      );
      const min = getBoundary(
        'min',
        minDate,
        currentDateRef.current || minDate
      );

      let result: Array<{ type: ColumnType; range: number[] }> = [
        {
          type: 'year',
          range: [min.year, max.year]
        },
        {
          type: 'month',
          range: [min.month, max.month]
        },
        {
          type: 'day',
          range: [min.date, max.date]
        },
        {
          type: 'hour',
          range: [min.hour, max.hour]
        },
        {
          type: 'minute',
          range: [min.minute, max.minute]
        }
      ];

      switch (type) {
        case 'date':
          result = result.slice(0, 3);
          break;
        case 'year-month':
          result = result.slice(0, 2);
          break;
        case 'month-day':
          result = result.slice(1, 3);
          break;
        case 'datehour':
          result = result.slice(0, 4);
          break;
      }

      return result;
    }, [type]);

    const originColumns = React.useMemo(
      () =>
        ranges.map(({ type, range: rangeArr }) => {
          let values = createArray(rangeArr[1] - rangeArr[0] + 1, (index) =>
            padZero(rangeArr[0] + index)
          );

          if (filter) {
            values = filter(type, values);
          }

          return {
            type,
            values
          };
        }),
      [ranges, filter]
    );

    const columns = React.useMemo(() => {
      return originColumns.map((column) => ({
        values: column.values.map((value) => formatter(column.type, value))
      }));
    }, [originColumns, formatter]);

    const updateColumnValue = () => {
      const value = currentDateRef.current || minDate;
      const values = originColumns.map((column) => {
        switch (column.type) {
          case 'year':
            return formatter('year', `${value.getFullYear()}`);
          case 'month':
            return formatter('month', padZero(value.getMonth() + 1));
          case 'day':
            return formatter('day', padZero(value.getDate()));
          case 'hour':
            return formatter('hour', padZero(value.getHours()));
          case 'minute':
            return formatter('minute', padZero(value.getMinutes()));
        }
      });

      nextTick(() => {
        actionRef.current?.setValues(values);
      });
    };

    const updateInnerValue = () => {
      if (!actionRef.current) return;

      const indexes = actionRef.current.getIndexes();

      const getValue = (type: ColumnType) => {
        let index = 0;
        originColumns.forEach((column, columnIndex) => {
          if (type === column.type) {
            index = columnIndex;
          }
        });
        const { values } = originColumns[index];
        return getTrueValue(values[indexes[index]]);
      };

      let year;
      let month;
      let day;
      if (type === 'month-day') {
        year = (currentDateRef.current || minDate).getFullYear();
        month = getValue('month');
        day = getValue('day');
      } else {
        year = getValue('year');
        month = getValue('month');
        day = type === 'year-month' ? 1 : getValue('day');
      }

      const maxDay = getMonthEndDay(year, month);
      day = day > maxDay ? maxDay : day;

      let hour = 0;
      let minute = 0;

      if (type === 'datehour') {
        hour = getValue('hour');
      }

      if (type === 'datetime') {
        hour = getValue('hour');
        minute = getValue('minute');
      }

      const value = new Date(year, month - 1, day, hour, minute);
      currentDateRef.current = formatValue(value);
    };

    const handleConfirm = () => {
      onConfirm?.(currentDateRef.current!);
    };

    const handleChange = useEventCallback(() => {
      updateInnerValue();
      nextTick(() => {
        onChange?.(currentDateRef.current!);
      });
    });

    useMount(() => {
      updateColumnValue();
      nextTick(updateInnerValue);
    });

    useUpdateEffect(updateColumnValue, [columns]);
    useUpdateEffect(updateInnerValue, [filter, minDate, maxDate]);

    useUpdateEffect(() => {
      const value = formatValue(valueProp);

      if (value && value.valueOf() !== currentDateRef.current?.valueOf()) {
        currentDateRef.current = value;
      }
    }, [valueProp]);

    return (
      <Picker
        actionRef={handleActionRef}
        columns={columns}
        onChange={handleChange}
        onConfirm={handleConfirm}
        onCancel={onCancel}
        ref={ref}
        {...rest}
      />
    );
  }
);

export default DatePicker;
