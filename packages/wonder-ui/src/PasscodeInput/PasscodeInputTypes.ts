import * as React from 'react';
import type { PasscodeInputClassesType } from './PasscodeInputClasses';

export interface PasscodeInputProps {
  classes?: Partial<PasscodeInputClassesType>;
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  defaultValue?: string;
  length?: number;
  caret?: boolean;
  clearText?: boolean;
  error?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  seperated?: boolean;
  onChange?: (value: string) => void;
  onFinish?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export interface StyleProps {
  styleProps: PasscodeInputProps & {
    focused?: boolean;
    dot?: boolean;
    caret?: boolean;
  };
}
