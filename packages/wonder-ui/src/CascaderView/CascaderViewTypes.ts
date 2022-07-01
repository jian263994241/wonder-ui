import * as React from 'react';
import { cascaderViewClasses } from './CascaderViewClasses';

export type PickerFieldNames = {
  label: string;
  value: string;
  children: string;
};

export type CscaderViewClassesType = typeof cascaderViewClasses;

export type CascaderOption = {
  label?: React.ReactNode;
  value?: any;
  disabled?: boolean;
  children?: CascaderOption[];
  className?: string;
  style?: React.CSSProperties;
  description?: string;
  // for custom filed names
  [key: string]: any;
};

export type CascaderTab = {
  options: CascaderOption[];
  selected: CascaderOption | null;
};

export type CascaderViewAction = {
  getSelected(params?: { final?: boolean }): CascaderOption[] | undefined;
  getValues(params?: { final?: boolean }): any[] | undefined;
};

export interface CascaderViewProps {
  cascader?: any;
  /**
   * 自定义 options 结构中的字段
   * @default { label: 'label', value: 'value', children: 'children' }
   */
  fieldNames?: Partial<PickerFieldNames>;
  /**
   * 内部方法
   */
  actionRef?: React.Ref<CascaderViewAction | undefined>;
  /**
   * 选中图标
   */
  activeIcon?: JSX.Element;
  /**
   * 样式名
   */
  className?: string;
  /**
   * 样式名API
   */
  classes?: Partial<CscaderViewClassesType>;
  /**
   * 默认选中项
   */
  defaultValue?: any[];
  /**
   * 禁用点击波纹
   */
  disableRipple?: boolean;
  /**
   * 分割线
   */
  divider?: boolean;
  /**
   * 选择完整时触发
   */
  onFinish?: (value: any[]) => void;
  /**
   * 选择时触发
   */
  onChange?: (value: any[]) => void;
  /**
   * 配置每一列的选项
   */
  options?: CascaderOption[];
  /**
   * 未选中时的提示文案
   */
  placeholder?: string;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 选中项
   */
  value?: any[];
}

export interface StyleProps extends CascaderViewProps {}
