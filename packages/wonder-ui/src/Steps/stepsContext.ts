import * as React from 'react';
import { StepsContextType } from './StepsTypes';

export const StepsContext = React.createContext<StepsContextType | null>(null);
