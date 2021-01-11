import * as React from 'react';

export interface TouchFeedbackProps {
  disabled?: boolean;
  activeClassName?: string;
  activeStyle?: React.CSSProperties;
  children: React.ReactElement;
}

export default function TouchFeedback(props: TouchFeedbackProps): JSX.Element;
