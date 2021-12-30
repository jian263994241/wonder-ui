import * as React from 'react';
import { TabsProps } from './TabsTypes';

export type ContextValueType = {
  props: TabsProps;
  state: {
    inited: boolean;
    lineStyle: React.CSSProperties;
  };
  setValueUnControlled: (value: any) => void;
  currentValue: any;
};

export const TabsContext = React.createContext<ContextValueType | null>(null);
