import * as React from 'react';

export interface PickerProps {
  /**
   * @ignore
   */
  children?: React.ReactNode;
  /**
   * 占位提示
   */
  placeholder?: string;
  /**
   * same as placeholder
   */
  extra?: React.ReactNode;
  /**
   * The data of picker
   */
  data?: {
    label: string;
    value: any;
  }[];
  /**
   * selected value
   */
  value?: any[];
  /**
   * click ok callback
   */
  onOk?: () => void;
  /**
   * click cancel callback
   */
  onCancel?: () => void;
  /**
   * rc-from callback
   */
  onChange?: (values: any[]) => void;
  /**
   * button text
   */
  okText?: string;
  /**
   * button text
   */
  cancelText?: string;
  /**
   * title
   */
  title?: string;
  /**
   * format
   */
  format?: (values: any[]) => any;
  /**
   * 每列数据选择变化后的回调函数
   */
  onPickerChange?: (values: any[]) => void;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   *
   */
  showError?: boolean;
}

export default function Picker(props: PickerProps): JSX.Element;
