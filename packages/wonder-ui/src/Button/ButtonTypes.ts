import { ButtonBaseProps } from '../ButtonBase';

export type ButtonClasses = Record<
  | 'root'
  | 'label'
  | 'text'
  | 'textInherit'
  | 'textPrimary'
  | 'textSecondary'
  | 'textSuccess'
  | 'textDanger'
  | 'textWarning'
  | 'textInfo'
  | 'textLight'
  | 'textDark'
  | 'outlined'
  | 'outlinedInherit'
  | 'outlinedPrimary'
  | 'outlinedSecondary'
  | 'outlinedSuccess'
  | 'outlinedDanger'
  | 'outlinedWarning'
  | 'outlinedInfo'
  | 'outlinedLight'
  | 'outlinedDark'
  | 'contained'
  | 'containedInherit'
  | 'containedPrimary'
  | 'containedSecondary'
  | 'containedSuccess'
  | 'containedDanger'
  | 'containedWarning'
  | 'containedInfo'
  | 'containedLight'
  | 'containedDark'
  | 'focusVisible'
  | 'disabled'
  | 'colorInherit'
  | 'textSizeSmall'
  | 'textSizeMedium'
  | 'textSizeLarge'
  | 'outlinedSizeSmall'
  | 'outlinedSizeMedium'
  | 'outlinedSizeLarge'
  | 'containedSizeSmall'
  | 'containedSizeMedium'
  | 'containedSizeLarge'
  | 'sizeMedium'
  | 'sizeSmall'
  | 'sizeLarge'
  | 'fullWidth'
  | 'startIcon'
  | 'endIcon'
  | 'edgeStart'
  | 'edgeEnd'
  | 'iconSizeSmall'
  | 'iconSizeMedium'
  | 'iconSizeLarge',
  string
>;

export interface ButtonProps extends ButtonBaseProps {
  className?: string;
  /**
   * 内容
   */
  children?: React.ReactNode;
  /**
   * Class api
   */
  classes?: Partial<ButtonClasses>;
  /**
   * 按钮颜色
   * @default primary
   */
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  /**
   * 节点
   * @default button
   */
  component?: React.ElementType;
  /**
   * 禁用焦点波纹
   */
  disableFocusRipple?: boolean;
  /**
   * 禁用反馈波纹
   */
  disableRipple?: boolean;
  /**
   * 按钮失效状态
   */
  disabled?: boolean;
  edge?: 'end' | 'start' | null;
  endIcon?: React.ReactNode;
  /**
   * 定义焦点的className
   */
  focusVisibleClassName?: string;
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
  startIcon?: React.ReactNode;
  /**
   * 按钮类型
   * @default text
   */
  variant?: 'text' | 'outlined' | 'contained';
}
