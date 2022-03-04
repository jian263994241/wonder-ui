import { cascaderClasses } from './CascaderClasses';
import { CascaderViewProps, CascaderOption } from '../CascaderView';
import type { PickerPopupProps } from '../Picker/PickerTypes';

export type CascaderClassesType = typeof cascaderClasses;

export interface CascaderProps
  extends CascaderViewProps,
    Omit<PickerPopupProps, 'onConfirm' | 'children'> {
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
