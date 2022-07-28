import * as React from 'react';
import { ListClassesType } from '../List/ListClasses';

type Meta = Record<string, any>;

export interface CheckListProps {
  className?: string;
  classes?: Partial<ListClassesType>;
  children?: React.ReactNode;
  /**
   * 选中图标
   */
  activeIcon?: React.ReactNode;
  /**
   * 默认项
   */
  defaultValue?: string[];
  /**
   * 禁用点击波纹
   */
  disableRipple?: boolean;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 多选
   */
  multiple?: boolean;
  /**
   * 选项改变时触发
   */
  onChange?: (value: string[], meta: Meta) => void;
  /**
   * 只读
   */
  readOnly?: boolean;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 选中项
   */
  value?: string[];
  /**
   * 标题
   */
  header?: React.ReactNode;
}

export interface CheckListContextType {
  activeIcon?: JSX.Element;
  value?: string[];
  readOnly?: boolean;
  disabled?: boolean;
  disableRipple?: boolean;
  setValue: (value: string, meta: Meta) => void;
}
