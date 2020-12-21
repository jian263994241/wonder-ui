import * as React from 'react';

export interface ActivityIndicatorProps {
  classes?: {
    root?: string;
    text?: string;
    vertical?: string;
  };

  size?: 'small' | 'medium' | 'large';

  text?: React.ReactNode;

  vertical?: boolean;
}

export default function ActivityIndicator(
  params: ActivityIndicatorProps
): JSX.Element;
