import * as React from 'react';

export interface CheckableTagProps {
  checked?: boolean;
  onChange?: (value: any) => void;
}

export default function CheckableTag(props: CheckableTagProps): JSX.Element;
