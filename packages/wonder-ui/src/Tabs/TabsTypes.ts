import * as React from 'react';
import { TabsClasses } from './TabsClasses';

export interface TabsProps {
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
  classes?: Partial<TabsClasses>;
  /**
   * 默认值
   */
  defaultValue?: any;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 禁用波纹
   */
  disableRipple?: boolean;
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

export interface TabsStyleProps extends TabsProps {}
