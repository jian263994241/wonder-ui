import * as React from 'react';
export interface BlockProps extends React.DOMAttributes<HTMLDivElement> {
  blank?: number;
  space?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export default function Block(props: BlockProps): JSX.Element;
