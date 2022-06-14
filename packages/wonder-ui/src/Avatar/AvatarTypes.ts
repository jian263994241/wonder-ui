import type { ImageProps } from '../Image/ImageTypes';

export interface AvatarProps
  extends Omit<
    ImageProps,
    'width' | 'height' | 'roundedRadius' | 'placeholder' | 'variant' | 'lazy'
  > {
  /**
   * 头像填充模式
   * @default cover
   */
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  /**
   * 头像尺寸
   * @default 44
   */
  size?: number;
}

export interface StyleProps {
  styleProps: AvatarProps;
}
