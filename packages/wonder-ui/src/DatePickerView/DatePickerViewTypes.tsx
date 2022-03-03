import { PickerViewProps } from '../PickerView/PickerViewTypes';

export type DatePrecision =
  | 'year'
  | 'month'
  | 'day'
  | 'hour'
  | 'minute'
  | 'second';

export type WeekPrecision = 'year' | 'week' | 'week-day';

export type Precision = DatePrecision | WeekPrecision;

export type DatePickerFilter = Partial<
  Record<
    Precision,
    (
      val: number,
      extend: {
        date: Date;
      }
    ) => boolean
  >
>;

export interface DatePickerViewProps
  extends Pick<
    PickerViewProps,
    | 'actionRef'
    | 'itemHeight'
    | 'classes'
    | 'className'
    | 'readOnly'
    | 'style'
    | 'visibleItemCount'
  > {
  /**
   * 默认时间
   */
  defaultValue?: Date;
  /**
   * 选中时间
   */
  value?: Date;
  /**
   * 精度
   * 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'week' | 'week-day'
   * @default day
   */
  precision?: Precision;
  /**
   * 可选的最小时间，精确到分钟
   * @default 10年前
   */
  minDate?: Date;
  /**
   * 可选的最大时间，精确到分钟
   * @default 10年后
   */
  maxDate?: Date;
  /**
   * 选项过滤函数
   */
  filter?: DatePickerFilter;
  /**
   * 选项改变时触发
   */
  onChange?: (value: Date) => void;
  /**
   * 自定义渲染每列展示的内容。
   * 其中 type 参数为 precision 中的任意值，data 参数为默认渲染的数字
   */
  onRenderLabel?: (type: Precision, data: number) => React.ReactNode;
}
