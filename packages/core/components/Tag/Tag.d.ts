export interface TagProps {
  /** 标签颜色 `primary`, `secondary`, 或者 自定颜色'#ccc' */
  color?: 'primary' | 'secondary' | string;
  /**
   * @ignore
   */
  clickable?: boolean;
  /**
   * Tag size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 细边框
   */
  hairline?: boolean;
}

export default function Tag(props: TagProps): JSX.Element;
