import * as React from 'react';

interface CountdownButtonProps {
  onStart?: (start: () => void) => void;
  defaultText?: string;
  defaultTextRe?: string;
  render?: () => React.ReactNode;
  runOnMount?: boolean;
  text?: string;
  totail?: number;
  className?: string;
}

export default function CountdownButton(
  props: CountdownButtonProps
): JSX.Element;
