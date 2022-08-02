import React from 'react';
import type { EllipsisClasses } from './EllipsisClasses';
import type { TypographyProps } from '../Typography/TypographyTypes';

export interface EllipsisProps
  extends Omit<TypographyProps, 'noWrap' | 'lineClamp'> {
  classes?: Partial<EllipsisClasses>;
  className?: string;
  children: string;
  style?: React.CSSProperties;
  /**
   * 省略号位置
   * @default end
   */
  direction?: 'start' | 'end' | 'middle';
  /**
   * 展示行数
   * @default 1
   */
  rows?: number;
  /**
   * 展开操作文字
   */
  expandText?: NonNullable<React.ReactNode>;
  /**
   * 收起操作文字
   */
  collapseText?: NonNullable<React.ReactNode>;
}

export type EllipsisedValue = {
  leading?: string;
  tailing?: string;
};
