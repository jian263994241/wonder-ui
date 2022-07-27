import { TypographyClassesType } from './TypographyClasses';

export type TypographyVariantKeys =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption';

export interface TypographyProps
  extends Omit<React.AllHTMLAttributes<any>, 'as'> {
  classes?: Partial<TypographyClassesType>;
  component?: React.ElementType;
  /**
   * @description 对齐
   */
  align?: 'center' | 'justify' | 'left' | 'right';
  /**
   * @description 颜色
   */
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'warning'
    | 'textPrimary'
    | 'textSecondary';

  /**
   * @description 不换行
   * @default false
   */
  noWrap?: boolean;
  /**
   * @description 多行省略
   * @default 0
   */
  lineClamp?: number;
  /**
   * @description 段落
   * @default false
   */
  paragraph?: boolean;
  /**
   * @description 增加间距
   * @default false
   */
  gutterBottom?: boolean;
  /**
   * @description 样式类型
   */
  variant?: TypographyVariantKeys | 'inherit';
}
