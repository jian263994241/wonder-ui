import React from 'react';
import type { NoticebarClassesType } from './NoticebarClasses';

export interface NoticebarProps {
  classes?: Partial<NoticebarClassesType>;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;

  /**
   * 自定义文字后面的内容
   */
  extra?: React.ReactNode;
  /**
   * 通知栏可关闭的
   */
  closeable?: boolean;
  /**
   * 通知文本内容
   */
  text?: React.ReactNode;
  /**
   * 图标
   */
  icon?: React.ReactNode;
  /**
   * 动画延迟时间 (s)
   */
  delay?: number;
  /**
   * 滚动速率 (px/s)
   * @default 60
   */
  speed?: number;
  /**
   * 关闭通知栏时触发
   */
  onClose?: React.EventHandler<React.MouseEvent>;
  /**
   * 点击通知栏文字时触发
   */
  onClick?: React.EventHandler<React.MouseEvent>;
  /**
   * 每当滚动栏重新开始滚动时触发
   */
  onReplay?: () => void;
  /**
   * 通知栏类型, 预设颜色
   * @default warning
   */
  type?: 'info' | 'warning' | 'error';
  /**
   * 换行
   */
  wrap?: boolean;
}
