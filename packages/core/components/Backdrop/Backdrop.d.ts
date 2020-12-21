import * as React from 'react';

export interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
  classes?: {
    root?: string;
  };
  onClick?: (e: any) => void;
  visible?: boolean;
}

export default function Backdrop(props: BackdropProps): JSX.Element;
