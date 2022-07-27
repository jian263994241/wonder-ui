import type { InputNumberProps } from '../InputNumber';
import type { StepperClassesType } from './StepperClasses';

export interface StepperProps {
  InputNumberProps?: Partial<InputNumberProps>;
  className?: string;
  classes?: Partial<StepperClassesType>;
  style?: React.CSSProperties;
  /**
   * 初始值
   */
  defaultValue?: number | string;
  /**
   * 禁用输入框
   */
  disableInput?: boolean;
  /**
   * 禁用减
   */
  disableMinusButton?: boolean;
  /**
   * 禁用加
   */
  disablePlusButton?: boolean;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 隐藏输入框
   */
  hideInput?: boolean;
  /**
   * 隐藏减
   */
  hideMinusButton?: boolean;
  /**
   * 隐藏加
   */
  hidePlusButton?: boolean;
  /**
   * 最大值
   */
  max?: number | string;
  /**
   * 最小值
   * @default 0
   */
  min?: number | string;
  /**
   * 值改变的时候回调
   */
  onChange?: (value: number) => void;
  /**
   * 步长
   * @default 1
   */
  step?: number | string;
  /**
   * 按钮长按触发的时长(ms)
   * @default 800
   */
  stepDelay?: number;
  /**
   * 连续增长的时间间隔(ms)
   * @default 150
   */
  stepInterval?: number;
  /**
   * 当前值
   */
  value?: number | string;
}
