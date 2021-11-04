import * as React from 'react';
import { StepsClasses } from './StepsClasses';

type Direction = 'horizontal' | 'vertical';

export interface StepsProps {
  /**
   * 样式名
   */
  className?: string;
  /**
   * Css api
   */
  classes?: Partial<StepsClasses>;
  /**
   * 当前步骤
   * @default 0
   */
  current?: number;
  /**
   * 内容
   */
  children?: React.ReactNode;
  /**
   * 步骤条方向
   */
  direction?: Direction;
  /**
   * 样式
   */
  style?: React.CSSProperties;
}

export interface StepsContextType extends StepsProps {}
