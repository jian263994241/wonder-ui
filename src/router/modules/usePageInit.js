import React from 'react';
import { __RouterContext } from 'react-router-dom';

const usePageInit = (callback) => {
  const context = React.useContext(__RouterContext);
  const matched = context.match || {};

  React.useEffect(()=>{
    if(matched.isExact){
      return callback && callback();
    }
  }, [matched.isExact]);
}


export default usePageInit;