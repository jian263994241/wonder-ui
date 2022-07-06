import React from 'react';
import type { InputClassesType } from './InputClasses';

export interface InputFocusOptions extends FocusOptions {
  cursor?: 'start' | 'end' | 'all';
}

export type RevealButtonProps = {
  className: string;
  visible: boolean;
  onClick: React.MouseEventHandler<any>;
};

export interface InputAction {
  focus(option?: InputFocusOptions): void;
  blur(): void;
  select(): void;
  setSelectionRange(
    start: number,
    end: number,
    direction?: 'forward' | 'backward' | 'none'
  ): void;
}

export interface InputAction {
  focus(option?: InputFocusOptions): void;
  blur(): void;
  select(): void;
  setSelectionRange(
    start: number,
    end: number,
    direction?: 'forward' | 'backward' | 'none'
  ): void;
}

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'size'> {
  /**
   * 内置方法
   */
  actionRef?: React.Ref<InputAction | undefined>;
  /**
   * 清除图标
   */
  allowClear?: boolean;
  /**
   * 去除边框
   */
  borderless?: boolean;
  classes?: Partial<InputClassesType>;
  component?: React.ElementType;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 禁用激活样式
   */
  disabledActiveStyle?: boolean;
  /**
   * 最大长度
   */
  maxLength?: number;
  /**
   * 错误状态
   */
  error?: boolean;
  /**
   * 多行
   */
  multiline?: boolean;
  /**
   * 多行时显示字数
   */
  showCount?: boolean;
  /**
   * 多行时的最大行数
   */
  maxRows?: number;
  /**
   * 多行时的最小行数
   */
  minRows?: number;
  /**
   * 前缀图标的
   */
  prefix?: React.ReactNode;
  /**
   * 只读
   */
  readOnly?: boolean;

  resizable?: boolean;
  /**
   * 后缀图标
   */
  suffix?: React.ReactNode;
  /**
   * 控件大小。
   * @default middle
   */
  size?: 'large' | 'middle' | 'small';
  /**
   * 前缀图标的
   */
  onRenderPrefix?(props: InputProps): React.ReactNode;
  /**
   * 后缀图标
   */
  onRenderSuffix?(props: InputProps): React.ReactNode;
  /**
   * 自定义显示密码按钮
   */
  onRenderRevealButton?(props: RevealButtonProps): React.ReactNode;
  /**
   * 按下回车的回调
   */
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  /**
   * 输入框内容变化时的回调
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * 输入框内容
   */
  value?: string | ReadonlyArray<string> | number;
  /**
   * 输入框默认内容
   */
  defaultValue?: string | ReadonlyArray<string> | number;
  // /** Transform `display value` to value */
  // parser?: (displayValue: any) => any;
  // /** Transform `value` to display value show in input */
  // formatter?: (value: any) => string;
}

export interface InputStyleProps extends InputProps {
  focused?: boolean;
}

export interface TextareaAutosizeProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * 最大行数字
   */
  maxRows?: number;
  /**
   * 最小行数字
   */
  minRows?: number;
  /**
   * 显示统计
   */
  showCount?: boolean;

  value?: string;
}
