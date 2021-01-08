import * as React from 'react';

export interface PartialRouteObject {
  path: string;
  exact?: boolean;
  element?: React.ReactNode;
  component?: React.ComponentType;
  async?: () => Promise<any>;
  children?: PartialRouteObject[];
}

export interface routeProps {
  path: string;
  element: React.ReactNode;
  exact?: boolean;
}

export interface Location {
  hash: string;
  query: object;
  search: string;
  pathname: string;
  state: any;
}
