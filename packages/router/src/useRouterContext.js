import React from 'react';
import RouterContext from './Context';
import {__RouterContext} from 'react-router-dom';

export default function useRouterContext(){
  const originContext = React.useContext(__RouterContext) || {};
  const routerContext = React.useContext(RouterContext) || {};

  return {
    ...originContext,
    ...routerContext
  };
}