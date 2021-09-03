import * as React from 'react';

export type KeyType = '' | 'delete' | 'extra' | 'close' | 'enter';

export type KeyConfig = {
  text?: number | string;
  type?: KeyType;
  color?: string;
  wider?: boolean;
};

export type NumberKeyboardClasses = Record<
  | 'root'
  | 'header'
  | 'body'
  | 'keys'
  | 'keyWrapper'
  | 'key'
  | 'close'
  | 'delete'
  | 'enter'
  | 'slidebar',
  string
>;

export interface NumberKeyboardProps {
  /**
   * 输入框
   */
  children?: JSX.Element;

  classes?: Partial<NumberKeyboardClasses>;

  className?: string;
  /**
   * 关闭按钮文字，空则不展示
   */
  closeButtonText?: string;
  /**
   * 删除按钮文字，空则展示删除图标
   */
  deleteButtonText?: string;
  /**
   * 完成按钮文字
   * @default 完成
   */
  enterButtonText?: string;
  /**
   * 底部额外按键的内容
   */
  extraKey?: string | string[];
  /**
   * 随机排序数字键盘，常用于安全等级较高的场景
   * @default false
   */
  randomKeyOrder?: boolean;
  /**
   * 是否显示关闭按钮
   */
  showCloseKey?: boolean;
  /**
   * 是否展示删除图标
   * @default true
   */
  showDeleteKey?: boolean;
  /**
   * 是否显示完成按钮, 非侧栏模式下有效
   * @default false
   */
  showEnterKey?: boolean;
  /**
   * 显示侧栏
   * @default false
   */
  showSlidebar?: boolean;

  style?: React.CSSProperties;
  /**
   * 关闭事件
   */
  onClose?(): void;
  /**
   * 删除事件
   */
  onDelete?(): void;
  /**
   * 完成事件
   */
  onEnter?(): void;
  /**
   * 输入事件
   */
  onInput?(key: string | number): void;
  /**
   * 输入框属性名
   * @default value
   */
  valuePropName?: string;
  /**
   * 输入框触发键盘显示的事件名
   * @default onClick
   */
  triggerName?: string;
  /**
   * 键盘标题
   */
  title?: React.ReactNode;
}
