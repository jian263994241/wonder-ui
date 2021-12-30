import * as React from 'react';
import { pickerViewClasses } from './PickerViewClasses';

export type PickerViewClassesType = typeof pickerViewClasses;

export type PickerObjectOption = {
  text?: string;
  disabled?: boolean;
  children?: PickerObjectOption[];
  // for custom filed names
  [key: string]: any;
};

export type PickerOption = string | PickerObjectOption;

export type PickerObjectColumn = {
  values?: PickerOption[];
  children?: PickerOption[] | PickerObjectColumn;
  className?: string;
  defaultIndex?: number;
  // for custom filed names
  [key: string]: any;
};

export type PickerAction = {
  getValues(): PickerOption[];
  setValues(values: string[]): void;
  getIndexes(): number[];
  setIndexes(indexes: number[]): void;
  getColumnValue(columnIndex: number): PickerOption | undefined;
  setColumnValue(index: number, value: string): void;
  getColumnIndex(index: number): number | undefined;
  setColumnIndex(columnIndex: number, optionIndex: number): void;
  getColumnValues(index: number): PickerOption[] | undefined;
  setColumnValues(index: number, options: PickerOption[]): void;
  confirm(): void;
};

export type PickerColumn = PickerOption[];
export interface PickerViewProps {
  /**
   * 内置方法
   */
  actionRef?: React.Ref<PickerAction | null>;
  classes?: Partial<PickerViewClassesType>;
  className?: string;
  /**
   * 是否为只读状态，只读状态下无法切换选项
   */
  readOnly?: boolean;
  style?: React.CSSProperties;
  /**
   * 配置每一列显示的数据
   */
  columns?:
    | PickerColumn
    | PickerColumn[]
    | PickerObjectColumn
    | PickerObjectColumn[];
  /**
   * 选项高度，支持 `px` `vw` `vh` `rem` 单位，默认 px
   * @default 44px
   */
  itemHeight?: number | string;
  /**
   * 选项对象中，选项文字对应的键名
   * @default text
   */
  textKey?: string;
  /**
   * 配置对象中取值键名
   * values
   */
  valuesKey?: string;
  /**
   * 子项键名
   * @default children
   */
  childrenKey?: string;
  /**
   * 可见的选项个数
   * @default 6
   */
  visibleItemCount?: number;
  /**
   * 默认值
   */
  defaultValue?: string[];
  /**
   * 值
   */
  value?: string[];
  /**
   * 是否显示加载状态
   */
  loading?: boolean;
  /**
   * 改变回调
   */
  onChange?(values: PickerOption[], picker: PickerAction): void;
  /**
   * action.confirm() 时触发
   */
  onConfirm?(values: PickerOption[], picker: PickerAction): void;
}

export type PickerColumnAction = {
  getIndex: () => number;
  setIndex(index: number, emitChange?: boolean): void;
  getValue(): PickerOption;
  setValue(value: string): void;
  setOptions(options: PickerOption[]): void;
  getOptions(): PickerOption[];
  stopMomentum(): void;
};

export type ColumnClasses = Record<'root' | 'content' | 'item', string>;

export interface ColumnProps {
  actionRef?: React.Ref<PickerColumnAction | null>;
  readOnly?: boolean;
  className?: string;
  classes?: ColumnClasses;
  textKey?: string;
  itemHeight?: number;
  swipeDuration?: number;
  visibleItemCount?: number;
  defaultIndex?: number;
  initialOptions?: PickerOption[];
  style?: React.CSSProperties;
  onChange?(index: number): void;
}
