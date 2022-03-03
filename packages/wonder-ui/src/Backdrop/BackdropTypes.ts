import * as React from 'react';
import { TransitionDuration } from '../styles/transitions';

export interface BackdropProps {
  /**
   * 背景层的颜色
   */
  color?: 'black' | 'white';
  /**
   * 透明度
   * @default 0.4
   */
  opacity?: number;
  /**
   * classname
   */
  className?: string;
  /**
   * style
   */
  style?: React.CSSProperties;
  /**
   * 自定义内容
   */
  children?: React.ReactNode;
  /**
   * 透明
   * @default false
   */
  invisible?: boolean;
  /**
   * 是否显示
   * @default false
   */
  visible: boolean;
  /**
   * 过渡时间(ms)
   */
  duration?: TransitionDuration;
  /**
   * 点击事件
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
