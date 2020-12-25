import * as React from 'react';
export interface CheckboxProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: object;
  checked?: boolean;
  onChange?: (value: any) => any;
}

export default function Checkbox(props: CheckboxProps): JSX.Element;
