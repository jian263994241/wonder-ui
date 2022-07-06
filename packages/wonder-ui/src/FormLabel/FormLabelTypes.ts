import type { FormLabelClassesType } from './FormLabelClasses';

export type RequiredMarkType = 'asterisk' | 'text-required' | 'text-optional';

export interface FormLabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
  classes?: Partial<FormLabelClassesType>;
  component?: React.ElementType;
  /**
   * 是否显示冒号
   * @default false
   */
  colon?: boolean;
  /**
   * 是否必选
   */
  required?: boolean;
  /**
   * 是否显示必选样式
   * @default true
   */
  requiredMark?: boolean;
  /**
   * 样式类型
   * @default asterisk
   */
  requiredMarkType?: RequiredMarkType;
  /**
   * 填充文字(text-required)
   * @default 必填
   */
  requiredMarkText?: string;
  /**
   * 填充文字(text-optional)
   * @default 选填
   */
  optionalMarkText?: string;
  /**
   * 提示文本
   */
  help?: string;

  htmlFor?: string;
}

export interface FormLabelStyleProps extends FormLabelProps {}
