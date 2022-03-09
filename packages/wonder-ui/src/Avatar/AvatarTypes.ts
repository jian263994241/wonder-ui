import type { ImageProps } from '../Image/ImageTypes';

export interface AvatarProps extends ImageProps {
  /**
   * 头像填充模式
   * @default cover
   */
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  /**
   * 头像形状
   * @default rounded
   */
  variant?: 'circular' | 'rounded' | 'square';
}
