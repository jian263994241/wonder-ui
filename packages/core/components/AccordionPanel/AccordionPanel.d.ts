import * as React from 'react';

export interface AccordionPanelProps {
  classes?: {
    root?: string;
    transition?: string;
    hidden?: string;
  };
  /**
   * children
   */
  children?: NonNullable<React.ReactNode>;
  /**
   * 面板头内容
   */
  header: React.ReactNode;
  /**
   * 对应 activeKey
   */
  itemKey?: string;
}

export default function AccordionPanel(props: AccordionPanelProps): JSX.Element;
