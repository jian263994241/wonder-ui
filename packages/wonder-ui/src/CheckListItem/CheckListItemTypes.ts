import * as React from 'react';
import { ListItemClassesType } from '../ListItem/ListItemClasses';

export interface CheckListItemProps {
  /**
   * 等同 primary
   */
  children?: React.ReactNode;
  /**
   * 样式名
   */
  className?: string;
  /**
   * 节点样式名
   */
  classes?: Partial<ListItemClassesType>;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 分割线
   */
  divider?: boolean;
  /**
   * 小图
   */
  media?: React.ReactNode;
  /**
   * 主要文字
   */
  primary?: string;
  /**
   * 只读
   */
  readOnly?: boolean;
  /**
   * 次要描述文字
   */
  secondary?: string;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 选项值
   */
  value: string;
  /**
   * 点击事件
   */
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  /**
   * 元数据
   */
  meta?: Record<string, any>;
}
