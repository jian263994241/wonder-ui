import * as React from 'react';
import { ListItemClassesType } from '../ListItem/ListItemClasses';

export interface CheckListItemProps {
  children?: React.ReactNode;
  className?: string;
  classes?: Partial<ListItemClassesType>;
  meta?: Record<string, any>;
  style?: React.CSSProperties;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 小图
   */
  prefix?: React.ReactNode;
  /**
   * 主要文字
   */
  primary?: React.ReactNode;
  /**
   * 只读
   */
  readOnly?: boolean;
  /**
   * 次要描述文字
   */
  secondary?: React.ReactNode;
  /**
   * 选项值
   */
  value: string;
  /**
   * 点击事件
   */
  onClick?: React.MouseEventHandler<HTMLLIElement>;
}
