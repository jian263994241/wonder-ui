import * as React from 'react';
import Picker, { PickerProps } from '../Picker';
import type { PickerAction } from '../PickerView/PickerViewTypes';
import useThemeProps from '../styles/useThemeProps';
import { clamp, createArray, nextTick, padZero } from '@wonder-ui/utils';
import {
  useEventCallback,
  useForkRef,
  useMount,
  useUpdateEffect
} from '@wonder-ui/hooks';

type ColumnType = 'hour' | 'minute';

const COMPONENT_NAME = 'WuiTimePicker';

export interface TimePickerProps
  extends Omit<PickerProps, 'columns' | 'onChange' | 'onConfirm'> {
  /**
   * 当前时间
   */
  currentTime?: string;
  /**
   * 最小小时
   * @default 0
   */
  minHour?: number;
  /**
   * 最大小时
   * @default 23
   */
  maxHour?: number;
  /**
   * 最小分钟
   * @default 0
   */
  minMinute?: number;
  /**
   * 最大分钟
   * @default 59
   */
  maxMinute?: number;
  /**
   * 选项过滤函数
   */
  filter?(type: ColumnType, values: string[]): string[];
  /**
   * 选项格式化函数
   */
  formatter?(type: ColumnType, value: string): string;
  /**
   * 当值变化时触发的事件
   */
  onChange?(value: string): void;
  /**
   * 点击完成按钮时触发的事件
   */
  onConfirm?(value: string): void;
  /**
   * 点击取消按钮时触发的事件
   */
  onCancel?(): void;
}

const defaultFormatter = (type: ColumnType, value: string) => value;

const TimePicker = React.forwardRef<HTMLDivElement, TimePickerProps>(
  (inProps, ref) => {
    const props = useThemeProps({ props: inProps, name: COMPONENT_NAME });
    const {
      actionRef: actionRefProp,
      filter,
      formatter = defaultFormatter,
      minHour = 0,
      maxHour = 23,
      minMinute = 0,
      maxMinute = 59,
      currentTime: valueProp,
      onChange,
      onConfirm,
      onCancel,
      ...rest
    } = props;

    const formatValue = (value?: string) => {
      if (!value) {
        value = `${padZero(minHour)}:${padZero(minMinute)}`;
      }

      let [hour, minute] = value.split(':');
      hour = padZero(clamp(+hour, +minHour, +maxHour));
      minute = padZero(clamp(+minute, +minMinute, +maxMinute));

      return `${hour}:${minute}`;
    };

    const currentDateRef = React.useRef(formatValue(valueProp));
    const actionRef = React.useRef<PickerAction>(null);
    const handleActionRef = useForkRef(actionRef, actionRefProp);

    const ranges = React.useMemo(
      () =>
        [
          {
            type: 'hour',
            range: [+minHour, +maxHour]
          },
          {
            type: 'minute',
            range: [+minMinute, +maxMinute]
          }
        ] as const,
      [minHour, maxHour, minMinute, maxMinute]
    );

    const originColumns = React.useMemo(
      () =>
        ranges.map(({ type, range: rangeArr }) => {
          let values = createArray(rangeArr[1] - rangeArr[0] + 1, (index) =>
            padZero(rangeArr[0] + index)
          );

          if (filter) {
            values = filter(type, values);
          }

          return { type, values };
        }),
      [ranges, filter]
    );

    const columns = React.useMemo(
      () =>
        originColumns.map((column) => ({
          values: column.values.map((value) => formatter(column.type, value))
        })),
      [originColumns, formatter]
    );

    const updateColumnValue = () => {
      const pair = currentDateRef.current.split(':');
      const values = [formatter('hour', pair[0]), formatter('minute', pair[1])];

      nextTick(() => {
        actionRef.current?.setValues(values);
      });
    };

    const updateInnerValue = () => {
      if (!actionRef.current) return;

      const [hourIndex, minuteIndex] = actionRef.current.getIndexes();

      const [hourColumn, minuteColumn] = originColumns;

      const hour = hourColumn.values[hourIndex] || hourColumn.values[0];
      const minute = minuteColumn.values[minuteIndex] || minuteColumn.values[0];

      currentDateRef.current = formatValue(`${hour}:${minute}`);

      updateColumnValue();
    };

    const handleConfirm = () => {
      onConfirm?.(currentDateRef.current);
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
    useUpdateEffect(updateInnerValue, [
      filter,
      maxHour,
      minHour,
      minMinute,
      maxMinute
    ]);

    useUpdateEffect(() => {
      const value = formatValue(valueProp);

      if (value !== currentDateRef.current) {
        currentDateRef.current = value;
        updateColumnValue();
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

export default TimePicker;
