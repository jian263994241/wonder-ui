import * as React from 'react';
import { PickerViewProps, PickerOption } from '../PickerView';

export interface PickerPopupProps {
  className?: string;

  children?: React.ReactNode;
  /**
   * 禁用按钮波纹
   */
  disableRipple?: boolean;
  /**
   * 顶部栏标题
   */
  title?: React.ReactNode;
  /**
   * 副标题
   */
  subTitle?: React.ReactNode;
  /**
   * 取消按钮文字
   */
  cancelText?: React.ReactNode;
  /**
   * 确定按钮文案
   */
  confirmText?: React.ReactNode;
  /**
   * 控制浮层显示/隐藏
   */
  visible?: boolean;
  /**
   * 默认浮层显示
   */
  defaultVisible?: boolean;
  /**
   * 关闭浮层触发事件
   */
  onCancel?(): void;
  /**
   * 确认按钮触发事件
   */
  onConfirm?(): void;

  style?: React.CSSProperties;
}

export interface PickerProps
  extends PickerViewProps,
    Omit<PickerPopupProps, 'onConfirm' | 'children'> {
  /**
   * 数据展示
   */
  children?: (props: {
    selected?: PickerOption[];
    show: () => void;
  }) => React.ReactNode;
  /**
   * 确认按钮触发事件
   */
  onConfirm?(values: any[]): void;
}
