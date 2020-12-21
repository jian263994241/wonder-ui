import * as React from 'react';

export interface CheckableTagGroupProps {
  data?: {
    label: React.ReactNode;
    value: any;
  }[];

  value?: any;

  exclusive?: boolean;

  onChange?: (val: any) => void;
}

export default function CheckableTagGroup(
  props: CheckableTagGroupProps
): JSX.Element;
