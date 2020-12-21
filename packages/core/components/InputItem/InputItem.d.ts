import * as React from 'react';
import { InputBaseProps } from '../InputBase';

export interface InputItemProps extends InputBaseProps {
  /**
   * 输入文字向右对齐, 默认向左
   */
  alignRight?: boolean;
  /**
   * label展示文字
   */
  children?: any;
  /**
   * class API 覆盖组件原有样式.
   */
  classes?: object;
  /**
   * Root node className
   */
  className?: string;
  /**
   * 显示情况输入的按钮
   */
  clearButton?: boolean;
  /**
   * 最右边额外的内容展示
   */
  extra?: any;
  /**
   * label的字数限制, 默认5
   */
  labelNumber?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  /**
   * onChange
   */
  onChange?: (value: any) => void;
  /**
   * 是否多行, multiline: true时, Input 替换成 TextareaAutosize
   */
  multiline?: boolean;
  /**
   * extra部分的点击操作
   */
  onExtraClick?: () => void;
  /**
   * 替换默认输入框
   */
  renderInput?: () => React.ReactNode;
  /**
   * value
   */
  value?: any;
}

export default function InputItem(props: InputItemProps): JSX.Element;
