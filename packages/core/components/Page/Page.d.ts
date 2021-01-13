import * as React from 'react';

export interface PageProps {
  name: string;
  pageContent?: boolean;
  children?: React.ReactNode;
}

export default function Page(props: PageProps): JSX.Element;
