import * as React from 'react';

export interface BlockProps {
  className?: string;
  blank?: number;
  space?: number;
  bottom?: number;
  left?: number;
  right?: number;
  children?: NonNullable<React.ReactNode>;
}

export default function Block(props: BlockProps): JSX.Element;
