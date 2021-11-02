import * as React from 'react';
import { TabsProps } from './TabsTypes';
import { TabMeta } from '../Tab/TabTypes';

export type ContextValueType = {
  props: TabsProps;
  state: {
    current?: TabMeta;
    inited: boolean;
    lineStyle: React.CSSProperties;
  };
  store: Map<any, TabMeta>;
  setLine: () => void;
};

export const TabsContext = React.createContext<ContextValueType | null>(null);
