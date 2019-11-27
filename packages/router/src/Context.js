import React from 'react';
import {__RouterContext} from 'react-router-dom';

const RouterContext = React.createContext({});

export default RouterContext;

/**
 * Merge context
 * @param {*} props 
 */
export function RouterProvider(props){
  const {children, value} = props;
  const routerContext = React.useContext(__RouterContext);
  const merge = React.useMemo(()=>({ ...routerContext, ...value }), [routerContext, value]);
  return (
    <RouterContext.Provider value={merge}>
      {children}
    </RouterContext.Provider>
  )
}

export const RouterConsumer = RouterContext.Consumer;