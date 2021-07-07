import { spaceClasses } from './SpaceClasses';

type Alignment =
  | 'start'
  | 'end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'baseline'
  | 'stretch';

export type SpaceSize = 'small' | 'medium' | 'large' | number;

export interface SpaceProps
  extends Omit<React.HTMLProps<HTMLElement>, 'as' | 'size' | 'wrap'> {
  /**
   * Css api
   */
  classes?: Partial<typeof spaceClasses>;
  /**
   * @ignore
   */
  component?: React.ElementType;
  /**
   * Direction
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * @ignore
   */
  itemWrap?: boolean;
  /**
   * Defines the spacing between Space items.
   * @default medium
   */
  gap?: SpaceSize | [SpaceSize, SpaceSize];
  /**
   * Horizontal align
   */
  horizontalAlign?: Alignment;
  /**
   * reversed
   * @default false
   */
  reversed?: boolean;
  /**
   * Split node
   */
  split?: React.ReactNode;

  /**
   * Vertical align
   */
  verticalAlign?: Alignment;
  /**
   * height 100%
   */
  verticalFill?: boolean;
  /**
   * Wrap
   */
  nowrap?: boolean;
  /**
   * @ignore
   */
  ref?: React.Ref<any>;
}

export interface SpaceStyleProps {
  classes?: SpaceProps['classes'];
  direction?: SpaceProps['direction'];
  horizontalAlign?: Alignment;
  nowrap?: SpaceProps['nowrap'];
  reversed?: SpaceProps['reversed'];
  gap?: SpaceProps['gap'];
  verticalAlign?: Alignment;
  verticalFill?: SpaceProps['verticalFill'];
}
