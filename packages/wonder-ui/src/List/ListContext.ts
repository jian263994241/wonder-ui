import React from 'react';
import type { ContextValue } from './ListTypes';

export const ListContext = React.createContext<ContextValue | null>(null);

export const useListContext = () => React.useContext(ListContext);
