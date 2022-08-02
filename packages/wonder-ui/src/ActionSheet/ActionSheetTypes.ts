import React, { MouseEvent } from 'react';
import { actionSheetClasses } from './ActionSheetClasses';

export type ActionSheetClassesType = typeof actionSheetClasses;

export type ActionSheetAction = {
  text: string;
  description?: string;
  disabled?: boolean;
  danger?: boolean;
  onClick?: React.MouseEventHandler<MouseEvent>;
  key?: any;
  // others
  [k: string]: any;
};

export interface ActionSheetProps {
  /**
   * Css API
   */
  classes?: Partial<ActionSheetClassesType>;
  className?: string;
  style?: React.CSSProperties;
  /**
   * 顶部标题
   */
  title?: React.ReactNode;
  /**
   * 面板选项列表
   */
  actions?: ActionSheetAction[];
  /**
   * 触发按钮
   */
  children?: JSX.Element;
  /**
   * 取消按钮文字
   */
  cancelText?: React.ReactNode;
  /**
   * 分割线
   * @default true
   */
  divider?: boolean;
  /**
   * 是否显示
   * @default false
   */
  visible?: boolean;
  /**
   * 点击回调
   */
  onAction?: (action: ActionSheetAction) => void;
  /**
   * 关闭回调
   */
  onClose?: () => void;
  /**
   * 自定义内容
   */
  onRenderContent?: () => JSX.Element;
}
