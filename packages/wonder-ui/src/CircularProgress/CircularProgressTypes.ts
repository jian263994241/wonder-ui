import type { CircularProgressClassesType } from './CircularProgressClasses';

export interface CircularProgressProps {
  classes?: Partial<CircularProgressClassesType>;
  className?: string;
  style?: React.CSSProperties;

  /**
   * 颜色
   * @default primary
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'warning'
    | 'light'
    | 'dark';
  /**
   * 标签
   */
  children?: React.ReactNode;
  /**
   * 类型
   * @default indeterminate
   */
  variant?: 'determinate' | 'indeterminate';
  /**
   * 尺寸
   * @default 40
   */
  size?: number;
  /**
   * 粗细
   * @default 3.5
   */
  thickness?: number;
  /**
   * 值 0-100
   */
  value?: number;
}
