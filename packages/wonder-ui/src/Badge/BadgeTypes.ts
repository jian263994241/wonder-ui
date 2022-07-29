import React from 'react';
import type { BadgeClasses } from './BadgeClasses';

export interface BadgeProps {
  className?: string;
  classes?: Partial<BadgeClasses>;
  children?: React.ReactNode;
  component?: React.ElementType;
  style?: React.CSSProperties;
  /**
   * 预设颜色
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  /**
   * 不要使用(将删除)
   * @deprecated
   */
  hideContent?: boolean;
  /**
   * 边框
   */
  bordered?: boolean;
  /**
   * 显示为原点
   */
  dot?: boolean;
  /**
   * @description 圆角徽章
   * @default false
   */
  rounded?: boolean;
  /**
   * 内容
   */
  text?: React.ReactNode;
}
