import React from 'react';
import useRouterContext from './useRouterContext';

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