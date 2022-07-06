import * as React from 'react';
import ModalManager from './ModalManager';
import { BackdropProps } from '../Backdrop';
import { Container } from '../Portal/Portal';
import { modalClasses } from './ModalClasses';
import { ReactFocusLockProps } from 'react-focus-lock/interfaces';

export interface ModalProps {
  /**
   * AutoFocus
   */
  autoFocus?: boolean;
  /**
   * Backdrop Props
   * @default {}
   */
  BackdropProps?: Partial<BackdropProps>;
  /**
   * 子节点
   */
  children?: React.ReactNode;
  /**
   * Css api
   */
  classes?: Partial<typeof modalClasses>;
  /**
   * Root element
   */
  component?: React.ElementType;
  /**
   * 容器 HTMLElement
   */
  container?: Container;

  className?: string;
  /**
   * 过渡后关闭
   * @default false
   */
  closeAfterTransition?: boolean;
  /**
   * 禁用esc按键执行关闭
   * @default false
   */
  disableEscapeKeyDown?: boolean;
  /**
   * 禁用FocusLock
   * @default false
   */
  disableFocusLock?: boolean;
  /**
   * 禁用 Portal
   * @default false
   */
  disablePortal?: boolean;
  /**
   * 禁用滚动锁
   * @default false
   */
  disableScrollLock?: boolean;
  /**
   * FocusLock Props
   * @default {}
   */
  FocusLockProps?: Partial<ReactFocusLockProps>;
  /**
   * 隐藏Backdrop
   * @default false
   */
  hideBackdrop?: boolean;
  /**
   * @ignore
   */
  hasTransition?: boolean;
  /**
   * 保持Modal节点
   * @default false
   */
  keepMounted?: boolean;
  /**
   * Modal manager
   */
  manager?: InstanceType<typeof ModalManager>;
  /**
   * 背景板点击事件
   */
  onBackdropClick?(event: React.MouseEvent): void;
  /**
   * Modal关闭事件
   */
  onClose?<T extends 'backdropClick' | 'escapeKeyDown'>(
    event: T extends 'escapeKeyDown' ? React.KeyboardEvent : React.MouseEvent,
    type: T
  ): void;
  /**
   * esc键盘事件
   */
  onKeyDown?(event: React.KeyboardEvent): void;
  /**
   * 过渡动画事件
   */
  onTransitionEnter?(): void;
  /**
   * 过渡动画事件
   */
  onTransitionExited?(): void;

  style?: React.CSSProperties;
  /**
   * 是否显示
   * @default false
   */
  visible?: boolean;
}
