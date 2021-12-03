import * as React from 'react';
import { CheckListContextType } from './CheckListTypes';

const CheckListContext = React.createContext<CheckListContextType | null>(null);

export default CheckListContext;
