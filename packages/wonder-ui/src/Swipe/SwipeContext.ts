import * as React from 'react';
import { ContextType } from './SwipeTypes';

export const SwipeContext = React.createContext<ContextType | null>(null);
