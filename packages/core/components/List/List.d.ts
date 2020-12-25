import * as React from 'react';
export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  renderFooter?: () => React.ReactNode;
  renderHeader?: () => React.ReactNode;
  children?: any;
}

export default function List(params: ListProps): JSX.Element;
