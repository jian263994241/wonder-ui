import * as React from 'react';

export interface InputBaseProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  margin?: 'dense' | 'none';
  multiline?: boolean;
  rows?: number;
  rowsMax?: number;
  rowsMin?: number;
  startAdornment?: React.ReactNode;
  inputProps?: React.InputHTMLAttributes;
}

export default function InputBase(props: InputBaseProps): JSX.Element;
