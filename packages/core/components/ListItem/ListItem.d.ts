import * as React from 'react';

export interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  activeState?: boolean;
  align?: 'top' | 'center';
  arrow?: 'horizontal' | 'vertical' | 'vertical-up';
  children?: NonNullable<React.ReactNode>;
  disabled?: boolean;
  errorMessage?: string;
  extra?: React.ReactNode;
  thumb?: React.ReactNode;
  wrap?: boolean;
}

export default function ListItem(props: ListItemProps): JSX.Element;
