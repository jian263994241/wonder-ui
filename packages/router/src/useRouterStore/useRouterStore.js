import React from 'react';
import RouterContext from '../Context';

export default function useRouterStore() {
  const { routerStore } = React.useContext(RouterContext);
  return routerStore;
}