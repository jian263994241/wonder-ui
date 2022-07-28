import React from 'react';
import type { NavbarClassesType } from './NavbarClasses';

export interface NavbarProps {
  classes?: Partial<NavbarClassesType>;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  /**
   * 透明背景
   * @default false
   */
  backgroundInVisible?: boolean;
  /**
   * Position absolute
   * @default false
   */
  absolute?: boolean;
  /**
   * 左边的内容
   */
  left?: React.ReactNode;
  /**
   * 右边的内容
   */
  right?: React.ReactNode;
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 副标题
   */
  subTitle?: React.ReactNode;
  /**
   * 安全区域
   * @default false
   */
  safeArea?: boolean;
}

export interface NavbarStyleProps extends NavbarProps {}
