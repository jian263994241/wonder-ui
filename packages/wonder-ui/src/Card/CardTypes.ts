import * as React from 'react';
import type { CardClasses } from './CardClasses';

export interface CardProps {
  className?: string;
  classes?: Partial<CardClasses>;
  style?: React.CSSProperties;
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 右边区域
   */
  extra?: React.ReactNode;
  /**
   * 内容
   */
  children?: React.ReactNode;
  /**
   * 底部
   */
  footer?: React.ReactNode;
  /**
   * 点击body
   */
  onBodyClick?: React.EventHandler<React.MouseEvent>;
  /**
   * 点击header
   */
  onHeaderClick?: React.EventHandler<React.MouseEvent>;
  /**
   * 点击底部
   */
  onFooterClick?: React.EventHandler<React.MouseEvent>;
}
