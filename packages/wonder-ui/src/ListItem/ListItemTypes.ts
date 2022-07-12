import React from 'react';
import type { ListItemClassesType } from './ListItemClasses';
import type { ListMode } from '../List/ListTypes';

export type ArrowDirection = 'horizontal' | 'vertical' | 'vertical-up';

export interface ListItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'prefix'> {
  /**
   * 箭头
   */
  arrow?: boolean | ArrowDirection | React.ReactElement;
  /**
   * 内容
   */
  children?: React.ReactNode;
  /**
   * Css api
   */
  classes?: Partial<ListItemClassesType>;

  component?: React.ElementType;
  /**
   * Disabled
   */
  disabled?: boolean;
  /**
   * Disabled ripple
   */
  disableRipple?: boolean;

  selected?: boolean;
  /**
   * 可以点击列表
   */
  button?: boolean;
  /**
   * 主要文字
   */
  primary?: React.ReactNode;
  /**
   * 次要文字
   */
  secondary?: React.ReactNode;
  /**
   * 前面的类容
   */
  prefix?: React.ReactNode;
  /**
   * 额外的类容
   */
  extra?: React.ReactNode;
}

export interface ListItemStyleProps extends ListItemProps {
  mode?: ListMode;
}
