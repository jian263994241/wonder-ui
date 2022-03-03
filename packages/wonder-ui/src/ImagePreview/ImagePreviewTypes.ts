import * as React from 'react';
import { imagePreviewClasses } from './ImagePreviewClasses';

export type ImagePreviewClassesType = typeof imagePreviewClasses;

export interface ImagePreviewProps {
  classes?: Partial<ImagePreviewClassesType>;

  style?: React.CSSProperties;

  className?: string;
  /**
   * 图片地址
   */
  images?: string[];
  /**
   * 初始位置
   */
  defaultIndex?: number;
  /**
   * 显示指示器
   */
  showIndicators?: boolean;
  /**
   * 循环
   * @default true
   */
  loop?: boolean;
  /**
   * 放大倍数
   * @default 3
   */
  maxZoom?: number;
  /**
   * 显示
   */
  visible?: boolean;
  /**
   * 显示关闭按钮
   */
  showCloseButton?: boolean;
  /**
   * 显示切换按钮
   */
  showSwitchButtons?: boolean;
  /**
   * 自定义关闭按钮
   */
  closeButton?: JSX.Element;
  /**
   * 关闭事件
   */
  onClose?: () => void;
  /**
   * 切换事件
   */
  onIndexChange?: (index: number) => void;
  /**
   * 自定义指示器
   */
  onRenderIndicator?: (index: number, count: number) => JSX.Element;
  /**
   * 关闭后触发事件
   */
  onAfterClose?: () => void;
}

export interface ImagePreviewItemProps {
  src?: string;
  classes?: Record<'root' | 'img', string>;
  maxZoom?: number;
  minZoom?: number;
  rootWidth: number;
  rootHeight: number;
  onClose?: () => void;
}
