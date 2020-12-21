import * as React from 'react';

export interface AccordionProps {
  /**
   * 手风琴模式
   */
  accordion?: boolean;
  /**
   * 当前激活面板的 key
   */
  activeKey?: string;
  /**
   * children
   */
  children?: NonNullable<React.ReactNode>;

  /**
   * 初始化选中面板的 key
   */
  defaultActiveKey?: string;

  /**
   * 禁止动画
   */
  disableTranstion?: boolean;

  /**
   * 切换面板的回调
   */
  onChange?: (key: string) => void;
}

export default function Accordion(props: AccordionProps): JSX.Element;
