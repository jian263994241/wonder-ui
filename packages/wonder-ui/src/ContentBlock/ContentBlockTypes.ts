import React from 'react';
import type { ContentBlockClassesType } from './ContentBlockClasses';

export interface ContentBlockProps {
  classes?: Partial<ContentBlockClassesType>;
  /**
   * Root className
   */
  className?: string;
  /**
   * Root style
   */
  style?: React.CSSProperties;
  /**
   * 嵌入式样式
   */
  inset?: boolean;
  /**
   * 标题
   */
  title?: React.ReactNode;
  /**
   * 内容
   */
  children?: React.ReactNode;
}

export interface StyleProps {
  styleProps: ContentBlockProps;
}
