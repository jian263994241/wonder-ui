import React from 'react';
import {__RouterContext} from 'react-router-dom';

const Context = React.createContext({});

export default Context;

/**
 * Merge context
 * @param {*} props 
 */
export function Provider(props){
  const {children, value} = props;
  const routerContext = React.useContext(__RouterContext);
  const merge = React.useMemo(()=>({ ...routerContext, ...value }), [routerContext, value]);

  return (
    <Context.Provider value={merge}>
      {children}
    </Context.Provider>
  )
}

export function useRouterContext(){
  return React.useContext(Context) || {};
}