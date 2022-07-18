import type { ActivityIndicatorClassesType } from './ActivityIndicatorClasses';

export interface ActivityIndicatorProps {
  className?: string;
  classes?: Partial<ActivityIndicatorClassesType>;
  style?: React.CSSProperties;
  /**
   * 按钮颜色
   * @default inherit
   */
  color?: 'primary' | 'secondary' | 'light' | 'dark';
  /**
   * 图标尺寸
   * @default medium
   */
  iconSize?: 'small' | 'medium' | 'large';
  /**
   * 文字
   */
  text?: string;
  /**
   * 类型
   * @default circular
   */
  type?: 'spinner' | 'circular';
  /**
   * 垂直布局
   * @default false
   */
  vertical?: boolean;
}
