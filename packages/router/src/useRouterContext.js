import React from 'react';
import RouterContext from './Context';

export default function useRouterContext(){
  return React.useContext(RouterContext) || {};
}