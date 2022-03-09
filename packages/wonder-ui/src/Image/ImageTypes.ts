import * as React from 'react';
import { imageClasses } from './ImageClasses';

export type ImageClassesType = typeof imageClasses;

export interface ImageProps
  extends Pick<
    React.ImgHTMLAttributes<HTMLImageElement>,
    | 'crossOrigin'
    | 'decoding'
    | 'loading'
    | 'referrerPolicy'
    | 'sizes'
    | 'srcSet'
    | 'useMap'
    | 'alt'
  > {
  /**
   * Css api
   */
  classes?: Partial<ImageClassesType>;
  /**
   * 样式名
   */
  className?: string;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 图片链接
   */
  src?: string;
  /**
   * 图片填充模式
   * @default fill
   */
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  /**
   * 宽度, 支持 px vw vh rem 单位，默认 px
   */
  width?: string | number;
  /**
   * 高度, 支持 px vw vh rem 单位，默认 px
   */
  height?: string | number;
  /**
   * 图片形状
   * @default square
   */
  variant?: 'circular' | 'rounded' | 'square';
  /**
   * 图片懒加载
   */
  lazy?: boolean;
  /**
   * 加载时提示的占位符
   */
  placeholder?: JSX.Element;
  /**
   * 加载失败时提示的占位符
   */
  fallback?: JSX.Element;
  /**
   * 点击图片时触发
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /**
   * 图片加载完毕时触发
   */
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
  /**
   * 图片加载失败时触发
   */
  onError?: React.ReactEventHandler<HTMLImageElement>;
}

export interface StyleProps {
  styleProps: ImageProps;
}
