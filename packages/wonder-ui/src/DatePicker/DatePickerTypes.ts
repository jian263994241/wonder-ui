import type { DatePickerViewProps } from '../DatePickerView/DatePickerViewTypes';
import type { PickerProps } from '../Picker/PickerTypes';

export interface DatePickerProps
  extends DatePickerViewProps,
    Omit<
      PickerProps,
      | 'onConfirm'
      | 'children'
      | 'value'
      | 'defaultValue'
      | 'onChange'
      | 'columns'
    > {
  /**
   * 渲染输入框
   */
  children?(args: { selected?: Date; show: () => void }): React.ReactNode;
  /**
   * 确认按钮触发事件
   */
  onConfirm?: (value: Date) => void;
}
