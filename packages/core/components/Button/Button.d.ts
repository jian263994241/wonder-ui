import * as React from 'react';

interface ButtonProps {
  className?: string;
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
  disabled?: boolean;
  endIcon?: React.ReactNode;
  full?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  children?: NonNullable<React.ReactNode>;
}

export default function Button(props: ButtonProps): JSX.Element;
