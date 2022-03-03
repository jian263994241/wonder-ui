import * as React from 'react';
import { PickerViewProps, PickerOption } from '../PickerView';

export interface PickerPopupProps {
  className?: string;

  children?: React.ReactNode;
  /**
   * 顶部栏标题
   */
  title?: string;
  /**
   * 副标题
   */
  subTitle?: string;
  /**
   * 取消按钮文字
   */
  cancelText?: string;
  /**
   * 确定按钮文案
   */
  confirmText?: string;
  /**
   * 控制浮层显示/隐藏
   */
  visible?: boolean;
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
   * 默认浮层显示
   */
  defaultVisible?: boolean;
  /**
   * 确认按钮触发事件
   */
  onConfirm?(values: any[]): void;
}
