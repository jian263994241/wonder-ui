import * as React from 'react';
import { ModalProps } from '../Modal';

export interface PreloaderProps {
  className?: string;
  style?: React.CSSProperties;
  /**
   * ModalProps
   */
  ModalProps?: Partial<ModalProps>;
  /**
   *  触发节点
   */
  children?: JSX.Element;
  /**
   * 自定义指示器图标
   */
  indicator?: React.ReactNode;
  /**
   * @deprecated
   */
  onLoad?: () => Promise<any>;
  /**
   * 文字
   */
  text?: string;
  /**
   * 指示器类型
   * @default circular
   */
  type?: 'spinner' | 'circular';
  /**
   * 是否显示
   */
  visible?: boolean;
  /**
   * 垂直排列
   */
  vertical?: boolean;
}
