import React from 'react';
import type { RouteTransitionClasses } from './RouteTransitionClasses';

export interface RouteTransitionProps {
  classes?: Partial<RouteTransitionClasses>;

  className?: string;

  childrenKey?: string;

  style?: React.CSSProperties;
  /**
   * 内容
   */
  children?: React.ReactElement;
  /**
   * 过度时间
   * @default 375
   */
  duration?: number;
  /**
   * 动画(正向/反向)
   */
  reverse?: boolean;
}
