import React from 'react';
import { useRouterContext } from './Context';

const usePageInit = (callback, vars = []) => {
  const context = useRouterContext();
  const matched = context.match || {};

  React.useEffect(()=>{
    if(matched.isExact){
      return callback && callback();
    }
  }, [matched.isExact].concat(vars));
}


export default usePageInit;