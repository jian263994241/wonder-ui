import { cascaderClasses } from './CascaderClasses';
import { CascaderViewProps, CascaderOption } from '../CascaderView';
import type { PickerPopupProps, PickerAction } from '../Picker/PickerTypes';

export type CascaderClassesType = typeof cascaderClasses;

export interface CascaderAction extends PickerAction {}

export interface CascaderProps
  extends CascaderViewProps,
    Omit<PickerPopupProps, 'onConfirm' | 'onFinish' | 'children'> {
  /**
   * 数据展示
   */
  children?: (props: {
    selected: CascaderOption[] | undefined;
    show: () => void;
  }) => React.ReactNode;

  /**
   * 确认按钮触发事件
   */
  onConfirm?(values: any[]): void;
}
