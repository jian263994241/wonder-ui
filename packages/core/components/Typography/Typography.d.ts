export interface TypographyProps {
  component?: string;
  /**
   * @ignore
   */
  classes?: object;
  /**
   * 样式类型
   */
  type?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'default';
  /**
   * 是否为行内元素 display: inline-block
   */
  inline?: boolean;
  /**
   * 颜色
   */
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'warning'
    | 'info'
    | 'success'
    | 'error';
}

export default function Typography(props: TypographyProps): JSX.Element;
