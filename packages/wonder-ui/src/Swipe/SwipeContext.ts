import * as React from 'react';
import { SwipeProps, SwipeState } from './SwipeTypes';
import { SwipeItemState } from '../SwipeItem/SwipeItemTypes';

export type ContextValueType = {
  props: SwipeProps;
  state: SwipeState;
  store: Map<any, SwipeItemState>;
};

export const SwipeContext = React.createContext<ContextValueType | null>(null);
