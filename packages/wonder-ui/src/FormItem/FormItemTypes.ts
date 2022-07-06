import React from 'react';
import { FieldProps } from 'rc-field-form/es/Field';
import type { FormLaout } from '../Form/FormTypes';
import type { ArrowDirection } from '../ListItem/ListItemTypes';

export interface FormItemProps extends FieldProps {
  /**
   * 箭头的部分
   */
  arrow?: boolean | ArrowDirection | React.ReactElement;

  className?: string;

  style?: React.CSSProperties;
  /**
   * 表单控件部分的位置
   * @default 'left'
   */
  childAlign?: 'left' | 'right';

  description?: string;
  /**
   * 是否禁用, 继承父级Form属性
   */
  disabled?: boolean;
  /**
   * 最右边的部分
   */
  extra?: React.ReactNode;
  /**
   * 是否隐藏整个字段
   * @default false
   */
  hidden?: boolean;
  /**
   * 标签名
   */
  label?: React.ReactNode;
  /**
   * 布局模式, 继承父级Form属性
   */
  layout?: FormLaout;
  /**
   * 提示文本
   */
  help?: string;
  /**
   * 是否展示错误反馈, 继承父级Form属性
   */
  hasFeedback?: boolean;
  /**
   * 是否必选，需要注意的是这个属性仅仅用来控制外观，并不包含校验逻辑
   */
  required?: boolean;
  /**
   * 点击事件并收集子组件 Ref
   */
  onClick?: (event: React.MouseEvent, childRef: React.RefObject<any>) => void;
}

export interface FormItemStyleProps {
  styleProps: FormItemProps;
}
