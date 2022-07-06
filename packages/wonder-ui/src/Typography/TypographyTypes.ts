import { TypographyVariants } from '../styles/theme/createTypography';
import { TypographyClassesType } from './TypographyClasses';

type TypographyVariants2 = Pick<
  TypographyVariants,
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
>;

export interface TypographyProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * @description 对齐
   * @default inherit
   */
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  /**
   * class
   */
  classes?: Partial<TypographyClassesType>;
  /**
   * @description 颜色
   * @default inherit
   */
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'error'
    | 'warning';
  /**
   * Root element
   */
  component?: React.ElementType;
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
   * @default body1
   */
  variant?: keyof TypographyVariants2 | 'inherit';
}
