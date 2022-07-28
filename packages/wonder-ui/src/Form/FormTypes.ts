import * as React from 'react';
import type {
  FormProps as RcFormProps,
  FormInstance as RcFormInstance
} from 'rc-field-form';
import type { FormLabelClassesType } from './FormClasses';
import type { RequiredMarkType } from '../FormLabel/FormLabelTypes';

export interface FormInstance extends RcFormInstance {}

export type FormLaout = 'vertical' | 'horizontal';

export interface FormProps extends RcFormProps {
  children?: React.ReactNode;
  classes?: Partial<FormLabelClassesType>;
  className?: string;
  style?: React.CSSProperties;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 表单尾部的内容，常常用来放置提交按钮
   */
  footer?: React.ReactNode;
  /**
   * 是否展示错误反馈
   * @default true
   */
  hasFeedback?: boolean;
  /**
   * 布局模式
   * @default 'horizontal'
   */
  layout?: FormLaout;
  /**
   * 必填选填的标记样式
   * @default 'asterisk''
   */
  requiredMarkType?: RequiredMarkType;
  /**
   * 支持列表和卡片两种模式
   * @default false
   */
  card?: boolean;
}

export interface FormStyleProps extends FormProps {}

export interface ContextValue extends FormProps {}
