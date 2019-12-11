import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const usePageInit = (callback, vars = []) => {
  const matched = useRouteMatch() || {};

  React.useEffect(()=>{
    if(matched.isExact){
      return callback && callback();
    }
  }, [matched.isExact, ...vars]);
}


export default usePageInit;