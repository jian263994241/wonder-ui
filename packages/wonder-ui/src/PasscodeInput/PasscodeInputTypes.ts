import * as React from 'react';
import type { PasscodeInputClassesType } from './PasscodeInputClasses';

export interface PasscodeInputProps {
  classes?: Partial<PasscodeInputClassesType>;
  /**
   * root className
   */
  className?: string;
  /**
   * root style
   */
  style?: React.CSSProperties;
  /**
   * 受控值
   */
  value?: string;
  /**
   * 默认值
   */
  defaultValue?: string;
  /**
   * 输入框长度
   * @default 6
   */
  length?: number;
  /**
   * 光标
   */
  caret?: boolean;
  /**
   * 明文
   */
  clearText?: boolean;
  /**
   * 错误控制
   */
  error?: boolean;
  /**
   * 只读
   */
  readOnly?: boolean;
  disabled?: boolean;
  /**
   * 分隔框
   */
  seperated?: boolean;
  /**
   * 输入时回调
   */
  onChange?: (value: string) => void;
  /**
   * 填写完成回调
   */
  onFinish?: (value: string) => void;
  /**
   * 获取焦点回调
   */
  onFocus?: () => void;
  /**
   * 失去焦点回调
   */
  onBlur?: () => void;
}

export interface StyleProps {
  styleProps: PasscodeInputProps & {
    focused?: boolean;
    dot?: boolean;
    caret?: boolean;
  };
}
