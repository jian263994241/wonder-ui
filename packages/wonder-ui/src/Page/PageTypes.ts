import React from 'react';
import type { NavbarProps } from '../Navbar';
import type { PageClassesType } from './PageClasses';

export interface PageProps {
  component?: React.ElementType;
  className?: string;
  classes?: Partial<PageClassesType>;
  style?: React.CSSProperties;
  /**
   * Content div props
   */
  ContentProps?: React.HTMLAttributes<HTMLDivElement>;
  /**
   * Content ref
   */
  ContentRef?: React.ForwardedRef<HTMLDivElement>;
  /**
   * 导航栏属性
   */
  NavbarProps?: Partial<NavbarProps>;
  /**
   * 内容
   */
  children?: React.ReactNode;
  /**
   * 显示导航栏
   */
  navbar?: false;
  /**
   * 返回按钮事件
   */
  onBack?: () => void;
  /**
   * 关闭按钮事件
   */
  onClose?: () => void;
  /**
   * 是否显示返回按钮
   * @default false
   */
  showBackButton?: boolean;
  /**
   * 是否显示关闭按钮
   * @default false
   */
  showCloseButton?: boolean;
  /**
   * 副标题
   */
  subTitle?: React.ReactNode;
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * Navbar left
   */
  barLeft?: React.ReactNode;
  /**
   * Navbar right
   */
  barRight?: React.ReactNode;
  /**
   * 头部和导航栏不共存
   */
  header?: React.ReactNode;
  /**
   * 底部
   */
  footer?: React.ReactNode;
}

export interface PageStyleProps extends PageProps {}
