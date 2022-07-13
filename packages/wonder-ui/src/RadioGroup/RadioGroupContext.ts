import React from 'react';

interface ContextProps {
  handleChange: (value: any) => void;
  isValueSelected: (value: any) => boolean;
  disabled?: boolean;
}

export const RadioGroupContext = React.createContext<ContextProps | null>(null);
