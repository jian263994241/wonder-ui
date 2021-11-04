import * as React from 'react';
import { StepClasses } from './StepClasses';
import { StepsProps } from '../Steps/StepsTypes';

export interface StepProps {
  /**
   * 样式名
   */
  className?: string;
  /**
   * Css api
   */
  classes?: Partial<StepClasses>;
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 详情描述
   */
  description?: React.ReactNode;
  /**
   * 图标
   */
  icon?: React.ReactNode;
  /**
   * 指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态；如果该属性与 current 指定的状态不匹配会覆盖自动匹配的状态。
   * @default wait
   */
  status?: 'wait' | 'process' | 'finish' | 'error';
  /**
   * 样式
   */
  style?: React.CSSProperties;

  index?: number;
}

export interface StyleProps extends StepProps {
  direction: StepsProps['direction'];
  current: StepsProps['current'];
}
