import * as React from 'react';
export interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
  blank?: number;
  space?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export default function Block(props: BlockProps): JSX.Element;
