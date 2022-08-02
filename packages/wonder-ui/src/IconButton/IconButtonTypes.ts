import React from 'react';
import type { ButtonBaseProps } from '../ButtonBase/ButtonBaseTypes';
import type { ButtonColor } from '../Button/ButtonTypes';

export interface IconButtonClasses {
  root: string;
  edgeStart: string;
  edgeEnd: string;
  label: string;
  disabled: string;
}

export interface IconButtonProps extends ButtonBaseProps {
  classes?: Partial<IconButtonClasses>;
  className?: string;
  style?: React.CSSProperties;
  component?: React.ElementType;

  color?: ButtonColor;
  edge?: 'end' | 'start' | null;
}
