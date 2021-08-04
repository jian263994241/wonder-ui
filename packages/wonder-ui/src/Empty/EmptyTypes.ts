export type EmptyClasses = Record<
  'root' | 'footer' | 'image' | 'description',
  string
>;

export interface EmptyProps {
  /**
   * 额外的 CSS className
   */
  className?: string;
  /**
   * @ignore
   */
  classes?: Partial<EmptyClasses>;
  /**
   * 额外的内容
   */
  children?: React.ReactNode;
  /**
   * 描述文字
   * @default 暂无数据
   */
  description?: React.ReactNode;
  /**
   * 图片
   */
  image?: JSX.Element;
  /**
   * 额外的样式
   */
  style?: React.CSSProperties;
}
