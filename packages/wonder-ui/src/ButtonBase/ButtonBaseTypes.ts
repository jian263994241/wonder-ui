import * as React from 'react';
import { ButtonBaseClasses } from './ButtonBaseClasses';

export interface ButtonBaseActions {
  focusVisible(): void;
}

/**
 * Button props
 */
export interface ButtonBaseProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'ref'> {
  LinkComponent?: React.ElementType;
  TouchRippleProps?: object;
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
  href?: any;
  ref?: React.Ref<HTMLElement>;
  target?: string;
  type?: 'button' | 'reset' | 'submit';
}
