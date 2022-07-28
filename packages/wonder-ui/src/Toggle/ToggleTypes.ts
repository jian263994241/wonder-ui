import React from 'react';
import type { ToggleClassesType } from './ToggleClasses';

export interface ToggleProps {
  className?: string;
  classes?: Partial<ToggleClassesType>;
  style?: React.CSSProperties;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  /**
   * 选中
   */
  checked?: boolean;
  /**
   * 颜色
   */
  color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'info';
  /**
   * 默认选中
   */
  defaultChecked?: boolean;
  /**
   * 失效状态
   */
  disabled?: boolean;
  /**
   * 自定义Icon
   */
  icon?: (checked: boolean) => React.ReactNode;
  /**
   * input 元素的 id
   */
  id?: string;
  /**
   * 变化时回调函数
   */
  onChange?: (checked: boolean) => void;
}
