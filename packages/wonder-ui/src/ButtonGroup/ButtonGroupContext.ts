import * as React from 'react';
import { ButtonProps } from '../Button/Button';

export const ButtonGroupContext = React.createContext<{
  ButtonProps?: Partial<ButtonProps>;
}>({});
