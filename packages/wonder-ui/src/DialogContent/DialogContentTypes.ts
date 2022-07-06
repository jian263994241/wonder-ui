import * as React from 'react';
import { TypographyProps } from '../Typography';
import { dialogContentClasses } from './DialogContentClasses';

export type DialogContentClassesType = typeof dialogContentClasses;

export interface DialogButtonProps {
  primary?: boolean;
  danger?: boolean;
  text?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface DialogContentProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  /**
   * 按钮垂直排列
   */
  buttonsVertical?: boolean;
  /**
   * 按钮
   */
  buttons?: DialogButtonProps[];
  /**
   * Css api
   */
  classes?: Partial<DialogContentClassesType>;
  /**
   * 文字后的节点
   */
  content?: React.ReactNode;
  /**
   * 禁用波纹
   */
  disableRipple?: boolean;
  /**
   * 标题下的文字
   */
  text?: React.ReactNode;
  /**
   * 文字属性
   */
  textTypographyProps?: TypographyProps;
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 文字属性
   */
  titleTypographyProps?: TypographyProps;
}
