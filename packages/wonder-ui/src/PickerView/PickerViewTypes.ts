import * as React from 'react';
import { pickerViewClasses } from './PickerViewClasses';

export type PickerViewClassesType = typeof pickerViewClasses;

export type PickerFieldNames = {
  label: string;
  value: string;
  values: string;
  children: string;
};

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
  onRenderLabel?: (option: PickerOption) => React.ReactNode;
  // for custom filed names
  [key: string]: any;
};

export type PickerViewAction = {
  getValues(): any[];
  getColumnOptions(index: number): PickerOption[] | undefined;
  setColumnOptions(index: number, options: PickerOption[]): void;
};

export type PickerColumn = PickerOption[];

export type PickerColumns =
  | PickerColumn
  | PickerColumn[]
  | PickerObjectColumn
  | PickerObjectColumn[];

export interface PickerViewProps {
  actionRef?: React.Ref<PickerViewAction | undefined>;
  picker?: any;
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
  columns?: PickerColumns | ((values: any[]) => PickerColumns);
  /**
   * 选项高度，支持 `px` `vw` `vh` `rem` 单位，默认 px
   * @default 44px
   */
  itemHeight?: number | string;
  /**
   * 自定义 columns 结构中的字段
   * @default { label: 'label', value: 'value', values: 'values', children: 'children' }
   */
  fieldNames?: Partial<PickerFieldNames>;
  /**
   * 可见的选项个数
   * @default 6
   */
  visibleItemCount?: number;
  /**
   * 默认值
   */
  defaultValue?: any[];
  /**
   * 受控值
   */
  value?: any[];
  /**
   * 是否显示加载状态
   */
  loading?: boolean;
  /**
   * 改变回调
   */
  onChange?(values: any[], picker: PickerViewAction): void;
}

export interface ColumnProps {
  fieldNames: PickerFieldNames;
  readOnly?: boolean;
  className?: string;
  classes?: Record<'root' | 'content' | 'item', string>;
  textKey?: string;
  itemHeight?: number;
  swipeDuration?: number;
  visibleItemCount?: number;
  options?: PickerOption[];
  style?: React.CSSProperties;
  onIndexChange?(index: number): void;
  onRenderLabel?(option: PickerOption): React.ReactNode;
  defaultIndex?: number;
  index?: number;
}
