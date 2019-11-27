import React from 'react';
import useRouterContext from './useRouterContext';

export default function usePageInit(callback, values = []) {
  const context = useRouterContext();
  const matched = context.match || {};

  React.useEffect(()=>{
    if(matched.isExact){
      return callback && callback();
    }
  }, [matched.isExact].concat(values));
}