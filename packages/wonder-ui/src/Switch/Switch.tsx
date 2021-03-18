import * as React from 'react';
import createFCWithTheme from '../styles/createFCWithTheme';
import useClasses from '../styles/useClasses';
import styled from '../styles/styled';
import type {
  StyledComponentProps,
  StyleProps,
  ClassNameMap
} from '../styles/types';

export interface SwitchProps {}

const Switch = createFCWithTheme<SwitchProps>('WuiSwitch', (props, ref) => {
  return null;
});

export default Switch;
