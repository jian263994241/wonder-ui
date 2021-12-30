import * as React from 'react';
import { ListClassesType } from '../List/ListClasses';

type Meta = Record<string, any>;

export interface CheckListProps {
  /**
   * 选中图标
   */
  activeIcon?: JSX.Element;
  /**
   * 内容
   */
  children?: React.ReactNode;
  /**
   * 样式名
   */
  className?: string;
  /**
   * 节点样式名
   */
  classes?: Partial<ListClassesType>;
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
}

export interface CheckListContextType {
  activeIcon?: JSX.Element;
  value?: string[];
  readOnly?: boolean;
  disabled?: boolean;
  disableRipple?: boolean;
  setValue: (value: string, meta: Meta) => void;
}
