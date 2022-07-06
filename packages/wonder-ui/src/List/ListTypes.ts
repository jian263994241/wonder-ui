import React from 'react';
import type { ListClassesType } from './ListClasses';

export type ListMode = 'list' | 'card';

export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  component?: React.ElementType;
  classes?: Partial<ListClassesType>;
  /**
   * 禁用列表
   */
  disabled?: boolean;
  /**
   * 禁用按钮波纹
   */
  disableRipple?: boolean;
  /**
   * 卡片样式
   * @default list
   */
  mode?: ListMode;
}

export interface ListStyleProps extends ListProps {}

export interface ContextValue {
  disabled?: boolean;
  disableRipple?: boolean;
}
