import React from 'react';
import type { RouteTransitionClasses } from './RouteTransitionClasses';

export interface RouteTransitionProps {
  classes?: Partial<RouteTransitionClasses>;

  className?: string;

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
   * location.pathname
   */
  pathname?: string;
  /**
   * 返回动画
   */
  reverse?: boolean;
}
