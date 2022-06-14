import * as React from 'react';
import { ResultClassesType } from './ResultClasses';

export interface ResultProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  classes?: Partial<ResultClassesType>;
  /**
   * 状态
   */
  status: 'success' | 'error' | 'info' | 'waiting' | 'warning';
  /**
   * 标题
   */
  title: React.ReactNode;
  /**
   * 描述
   */
  description?: React.ReactNode;
  /**
   * 自定义icon
   */
  icon?: React.ReactNode;
}
