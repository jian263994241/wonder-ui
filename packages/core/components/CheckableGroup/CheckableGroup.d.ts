import * as React from 'react';

export interface CheckableGroupProps {
  data?: {
    label: React.ReactNode;
    value: any;
  }[];

  value?: any;

  exclusive?: boolean;

  onChange?: (val: any) => void;

  itemProps?: object;

  renderItem?: (data: any) => React.ReactNode;
}

export default function CheckableGroup(props: CheckableGroupProps): JSX.Element;
