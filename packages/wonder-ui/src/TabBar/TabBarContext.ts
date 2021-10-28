import * as React from 'react';
import { TabBarProps } from './TabBarTypes';

export type ContextValueType = {
  props: TabBarProps;
  state: {
    currentKey: string | number;
    inited: boolean;
    lineStyle: React.CSSProperties;
  };
  store: Record<string | number, any>;
  setLine: () => void;
};

export const TabBarContext = React.createContext<ContextValueType | null>(null);
