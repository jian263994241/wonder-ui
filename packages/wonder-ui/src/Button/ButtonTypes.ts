import { ButtonBaseProps } from '../ButtonBase';
import { buttonClasses } from './buttonClasses';

export type ButtonClasses = typeof buttonClasses;

export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

export interface ButtonProps extends ButtonBaseProps {
  className?: string;
  children?: React.ReactNode;
  classes?: Partial<ButtonClasses>;
  component?: React.ElementType;
  disableFocusRipple?: boolean;
  edge?: 'end' | 'start' | null;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  /**
   * 按钮颜色
   * @default primary
   */
  color?: ButtonColor;
  /**
   * 100%宽度
   */
  fullWidth?: boolean;
  /**
   * 形状: 圆角, 圆, 方角
   * @default default
   */
  shape?: 'default' | 'round' | 'square';
  /**
   * 尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 按钮类型
   * @default text
   */
  variant?: 'text' | 'outlined' | 'contained';
}
