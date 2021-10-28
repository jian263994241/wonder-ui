import * as React from 'react';
import { TabBarClasses } from './TabBarClasses';

export interface TabBarProps {
  /**
   * 居中, `variant=autoWidth`时可用
   */
  centered?: boolean;
  /**
   * 内容
   */
  children?: React.ReactNode;
  /**
   * 样式名
   */
  className?: string;
  /**
   * Css api
   */
  classes?: Partial<TabBarClasses>;
  /**
   * 默认值
   */
  defaultValue?: any;
  /**
   * 指示器样式
   */
  indicatorStyle?: React.CSSProperties;
  /**
   * 事件
   */
  onChange?: (value: any) => void;
  /**
   * 是否显示指示器
   */
  showIndicator?: boolean;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 文字颜色
   */
  textColor?: string;
  /**
   * 值
   */
  value?: any;
  /**
   * 排列类型
   * @default fullWidth
   */
  variant?: 'scrollable' | 'fullWidth' | 'autoWidth';
}

export interface TabBarStyleProps extends TabBarProps {}
