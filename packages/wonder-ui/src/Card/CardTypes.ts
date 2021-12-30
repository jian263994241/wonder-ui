import * as React from 'react';
import { cardClasses } from './CardClasses';

export type CardClasses = typeof cardClasses;

export interface CardProps
  extends Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'title'> {
  classes?: Partial<CardClasses>;
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
   * 点击body
   */
  onBodyClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /**
   * 点击header
   */
  onHeaderClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
