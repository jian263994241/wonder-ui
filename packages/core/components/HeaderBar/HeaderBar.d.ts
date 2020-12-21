import * as React from 'react';

export interface HeaderBarProps {
  /**
   * 左边
   */
  barLeft?: React.ReactNode;
  /**
   * 右边
   */
  barRight?: React.ReactNode;
  /**
   * 是否显示border bottom
   */
  bordered?: boolean;
  /**
   * @ignore
   */
  classes?: object;
  /**
   * 点击回调, showBack下有效
   */
  onBack?: () => void;
  /**
   * 点击回调, showClose下有效
   */
  onClose?: () => void;
  /**
   * 显示返回icon
   */
  showBack?: boolean;
  /**
   * 显示关闭icon
   */
  showClose?: boolean;
}

export default function HeaderBar(prosp: HeaderBarProps): JSX.Element;
