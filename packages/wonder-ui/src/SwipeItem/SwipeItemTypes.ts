import * as React from 'react';
import { SwipeItemClasses } from './SwipeItemClasses';
export interface SwipeItemProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 样式名
   */
  className?: string;
  /**
   * 内容
   */
  children?: React.ReactNode;
  /**
   * Css api
   */
  classes?: Partial<SwipeItemClasses>;
  /**
   * 样式
   */
  style?: React.CSSProperties;
}

export type SwipeItemState = {
  offset: number;
};

export interface SwipeItemStyleProps extends SwipeItemProps {
  active: boolean;
}
