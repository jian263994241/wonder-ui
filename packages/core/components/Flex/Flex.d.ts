import * as React from 'react';

export interface FlexProps {
  /** 子元素在交叉轴上的对齐方式 */
  align: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  /** 有多根轴线时的对齐方式 */
  alignContent: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';
  /** 子元素在主轴上的对齐方式 */
  justify: 'start' | 'end' | 'center' | 'between' | 'around';
  /** 子元素的换行方式 */
  wrap: 'nowrap' | 'wrap' | 'wrap-reverse';
  /** 项目定位方向 */
  direction: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  /** 子元素间距 8px */
  gutter: number;
  /**
   * cidlren flex: 1
   */
  flex: boolean;

  children?: NonNullable<React.ReactNode>;
}

export default function Flex(props: FlexProps): JSX.Element;
