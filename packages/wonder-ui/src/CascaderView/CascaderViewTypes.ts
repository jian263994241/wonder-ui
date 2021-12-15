import * as React from 'react';
import { cascaderViewClasses } from './CascaderViewClasses';

export type CscaderViewClassesType = typeof cascaderViewClasses;

export type CascaderOption = {
  label?: React.ReactNode;
  value?: string | number;
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

export interface CascaderViewProps {
  /**
   * 选中图标
   */
  activeIcon?: JSX.Element;
  /**
   * 子项对应的键名
   * @default children
   */
  childrenKey?: string;
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
  defaultValue?: (string | number)[];
  /**
   * 禁用点击波纹
   */
  disableRipple?: boolean;
  /**
   * 分割线
   */
  divider?: boolean;
  /**
   * 选项改变时触发
   */
  onChange?: (value: (string | number)[]) => void;
  /**
   * 获取当前选中配置项
   */
  onOptionsChange?: (options: CascaderOption[]) => void;
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
   * 选项对象中，选项文字对应的键名
   * @default label
   */
  textKey?: string;
  /**
   * 选中项
   */
  value?: (string | number)[];
  /**
   * 配置对象中取值键名
   * @default value
   */
  valueKey?: string;
}

export interface StyleProps extends CascaderViewProps {}
