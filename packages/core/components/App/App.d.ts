import * as React from 'react';

type RouteItem = {
  path: string;
  exact?: boolean;
  async: () => any;
  children?: RouteItem[];
  redirect?: string;
  name?: string;
};

export interface AppProps {
  app?: any;

  children?: NonNullable<React.ReactNode>;

  type?: 'browser' | 'memory' | 'hash';

  on?: {
    pageInit?: (data: any) => void;
    routeChange?: (data: any) => void;
  };

  routes: RouteItem[];

  theme?: object;

  routerStore?: any;
}

export default function App(props: AppProps): JSX.Element;
