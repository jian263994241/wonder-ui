import React from 'react';
import type { ContextValue } from './FormTypes';

export const FormContext = React.createContext<ContextValue | null>(null);

export const useFormContext = () => React.useContext(FormContext);
