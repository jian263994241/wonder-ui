import * as React from 'react';
import type { LinearProgressClassesType } from './LinearProgressClasses';

export interface LinearProgressProps {
  className?: string;
  classes?: Partial<LinearProgressClassesType>;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  /**
   * 动画
   * @default false
   */
  animated?: boolean;
  /**
   * 颜色
   * @default primary
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'warning'
    | 'light'
    | 'dark';
  /**
   * 值 0-100
   */
  value?: number;
  /**
   * 类型
   * @default ‘determinate’
   */
  variant?: 'determinate' | 'indeterminate';
}
