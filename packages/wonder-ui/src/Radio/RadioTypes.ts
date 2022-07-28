import * as React from 'react';
import type { RadioClassesType } from './RadioClasses';

export interface RadioProps {
  className?: string;
  classes?: Partial<RadioClassesType>;
  style?: React.CSSProperties;
  name?: string;
  /**
   * 是否渲染为块级元素
   */
  block?: boolean;
  /**
   * 内容
   */
  children?: React.ReactNode;
  /**
   * 选中
   */
  checked?: boolean;
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
   * input 元素的 id，常用来配合 label 使用
   */
  id?: string;
  /**
   * 变化时回调函数
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * 携带的标识值，用于 Group 模式
   */
  value?: any;
}

export interface RadioStyleProps extends RadioProps {}
