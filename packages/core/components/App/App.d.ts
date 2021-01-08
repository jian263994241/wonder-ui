import * as React from 'react';
export interface AppProps {
  children: React.ReactNode;

  onPageInit?: (data: { name?: string; [k: string]: any }) => void;
}

export default function App(props: AppProps): JSX.Element;
