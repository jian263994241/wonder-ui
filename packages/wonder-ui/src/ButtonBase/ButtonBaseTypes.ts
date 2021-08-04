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
  actionRef?: React.Ref<ButtonBaseActions>;
  centerRipple?: boolean;
  children?: React.ReactNode;
  classes?: Partial<ButtonBaseClasses>;
  component?: React.ElementType;
  disableRipple?: boolean;
  disableTouchRipple?: boolean;
  disabled?: boolean;
  focusRipple?: boolean;
  focusVisibleClassName?: string;
  href?: string;
  type?: 'button' | 'reset' | 'submit';
  onFocusVisible?(event: any): void;
}
