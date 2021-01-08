import * as React from 'react';
import { PartialRouteObject } from '@wonder-ui/router';

export interface AppProps {
  app?: any;

  children?: NonNullable<React.ReactNode>;

  router?: any;

  routerProps?: object;

  on?: {
    pageInit?: (data: { name?: string; [k: string]: any }) => void;
    routeChange?: (data: any) => void;
  };

  routes: PartialRouteObject[];

  theme?: object;
}

export default function App(props: AppProps): JSX.Element;
