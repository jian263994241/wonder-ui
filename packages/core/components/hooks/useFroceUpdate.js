import React from 'react';

const useForceUpdate = ()=>{
  const [timestamp , setNow] = React.useState();

  return [timestamp, ()=>{
    setNow(Date.now());
  }]
}


export default useForceUpdate;