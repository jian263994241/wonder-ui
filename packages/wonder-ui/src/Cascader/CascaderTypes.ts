import * as React from 'react';
import { cascaderClasses } from './CascaderClasses';
import { CascaderViewProps } from '../CascaderView';

export type CascaderClassesType = typeof cascaderClasses;

export interface CascaderProps extends CascaderViewProps {
  /**
   * 关闭按钮文字
   */
  cancelText?: React.ReactNode;
  /**
   * 显示框
   */
  children?: JSX.Element;
  /**
   * 样式名
   */
  className?: string;
  /**
   * 默认是否显示
   */
  defaultVisible?: boolean;
  /**
   * 禁用波纹
   */
  disableRipple?: boolean;
  /**
   * 保持浮层渲染
   */
  keepMounted?: boolean;
  /**
   * 显示字段的连接符
   */
  separator?: string;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 标题
   */
  title?: string;
  /**
   * 是否显示级联选择
   */
  visible?: boolean;
  /**
   * 关闭回调事件
   */
  onClose?: () => void;
  /**
   * 值改变时触发
   */
  onChange?: (value: (string | number)[]) => void;
  /**
   * 选择时触发
   */
  onSelect?: (value: (string | number)[]) => void;
  /**
   * 作用同children, 渲染显示框
   */
  onRenderChildren?: (props: {
    displayText: string;
    onClick: () => void;
  }) => JSX.Element;
}
