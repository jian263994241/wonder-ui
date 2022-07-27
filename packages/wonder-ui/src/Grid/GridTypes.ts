import React from 'react';

export interface GridProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  /**
   * 列数
   */
  columns: number;
  /**
   * 格子之间的间距
   * @default 0
   */
  gap?: number | string | [number | string, number | string];
}

export interface GridItemProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: React.EventHandler<React.MouseEvent<HTMLDivElement>>;
  /**
   * 跨度
   * @default 1
   */
  span?: number;
}
