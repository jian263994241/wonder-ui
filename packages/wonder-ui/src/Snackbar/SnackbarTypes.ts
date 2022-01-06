import { BaseTransitionProps, TransitionTimeout } from '../Transition';
import type { ClickAwayListenerProps } from '../ClickAwayListener';
import type { SnackbarContentProps } from '../SnackbarContent';
import * as React from 'react';

export interface SnackbarProps {
  ClickAwayListenerProps?: Partial<ClickAwayListenerProps>;
  ContentProps?: Partial<SnackbarContentProps>;
  TransitionComponent?: React.ComponentType<BaseTransitionProps>;
  TransitionProps?: BaseTransitionProps;
  children?: React.ReactElement;
  className?: string;
  style?: React.CSSProperties;
  disableWindowBlurListener?: boolean;
  disablePortal?: boolean;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  resumeHideDuration?: boolean | null;
  transitionDuration?: TransitionTimeout;
  /**
   * 操作区
   */
  action?: JSX.Element;
  /**
   * 定位
   */
  anchorOrigin?: {
    vertical?: 'top' | 'center' | 'bottom';
    horizontal?: 'left' | 'center' | 'right';
  };
  /**
   * 自动关闭持续时间
   * @default null
   */
  autoHideDuration?: number | null;
  /**
   * 内容
   */
  message?: React.ReactNode;
  /**
   * 关闭回调事件
   */
  onClose?: (event: Event, reason: 'timeout' | 'clickaway') => void;
  /**
   * 是否显示
   */
  visible?: boolean;
  /**
   * 点击背景触发 onClose
   * @default true
   */
  maskClickable?: boolean;
}
