import React from 'react';

export interface EllipsisProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  /**
   * 内容
   */
  children: string;
  /**
   * 省略号位置
   */
  direction?: 'start' | 'end' | 'middle';
  /**
   * 展示行数
   */
  rows?: number;
  /**
   * 展开操作文字
   */
  expandText?: string;
  /**
   * 收起操作文字
   */
  collapseText?: string;
}

export type EllipsisedValue = {
  leading?: string;
  tailing?: string;
};
