import React from 'react';
import { ellipsisClasses } from './EllipsisClasses';

export type EllipsisClasses = typeof ellipsisClasses;

export interface EllipsisProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  /**
   * Css API
   */
  classes?: Partial<EllipsisClasses>;
  /**
   * 样式名
   */
  className?: string;
  /**
   * 内容
   */
  children: string;
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
  /**
   * 样式
   */
  style?: React.CSSProperties;
}

export type EllipsisedValue = {
  leading?: string;
  tailing?: string;
};
