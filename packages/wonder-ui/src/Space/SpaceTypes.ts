import type { SpaceClassesType } from './SpaceClasses';

type Alignment =
  | 'start'
  | 'end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'baseline'
  | 'stretch';

export interface SpaceProps {
  classes?: Partial<SpaceClassesType>;
  className?: string;
  component?: React.ElementType;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  /**
   * 方向
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * SpaceItem 包裹
   */
  itemWrap?: boolean;
  /**
   * 间距
   * @default 8
   */
  gap?: number | string | [number | string, number | string];
  /**
   * 水平对齐
   */
  horizontalAlign?: Alignment;
  /**
   * reversed
   * @default false
   */
  reversed?: boolean;
  /**
   * 分隔符
   */
  split?: React.ReactNode;
  /**
   * 垂直对齐
   * @default center
   */
  verticalAlign?: Alignment;
  /**
   * 100%高度
   */
  verticalFill?: boolean;
  /**
   * 不换行
   * @default false
   */
  nowrap?: boolean;
  /**
   * 等分容器
   * @default false
   */
  itemEqual?: boolean;
}
