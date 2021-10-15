import * as React from 'react';

export interface TabsProps {
  active?: number | string;

  sticky?: boolean;

  scrollspy?: boolean;

  disableIndicator?: boolean;

  indicatorStyle?: React.CSSProperties;

  offsetTop?: number | string;
}
