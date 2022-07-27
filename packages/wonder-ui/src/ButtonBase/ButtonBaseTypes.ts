import { TouchRippleProps } from './TouchRipple';

export type ButtonBaseClasses = Record<
  'root' | 'disabled' | 'focusVisible',
  string
>;

export interface ButtonBaseActions {
  focusVisible(): void;
}

export interface ButtonBaseProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  LinkComponent?: React.ElementType;
  TouchRippleProps?: Partial<TouchRippleProps>;
  actionRef?: React.Ref<ButtonBaseActions | undefined>;
  centerRipple?: boolean;
  children?: React.ReactNode;
  classes?: Partial<ButtonBaseClasses>;
  component?: React.ElementType;
  /**
   * 禁用反馈波纹
   */
  disableRipple?: boolean;
  disableTouchRipple?: boolean;
  /**
   * 按钮失效状态
   */
  disabled?: boolean;
  focusRipple?: boolean;
  focusVisibleClassName?: string;
  href?: string;
  type?: 'button' | 'reset' | 'submit';
  onFocusVisible?(event: any): void;
}
