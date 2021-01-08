import * as React from 'react';

export interface SvgIconProps {
  children: React.ReactNode;

  className?: string;

  htmlColor?: string;

  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'action'
    | 'warning'
    | 'info'
    | 'success'
    | 'error'
    | 'disabled';

  fontSize?: 'inherit' | 'default' | 'small' | 'large';

  size?: 'inherit' | 'default' | 'small' | 'large';

  component?: React.ComponentType;

  shapeRendering?: string;

  titleAccess?: string;

  viewBox?: string;
}

export default function SvgIcon(props: SvgIconProps): JSX.Element;
