import React, { lazy, Suspense } from 'react';

export default function loadable(returnWebpackImport, options) {
  return function AsyncComponent(props) {
    const Component = lazy(() => timeout(returnWebpackImport, 0));

    return (
      <Suspense {...options}>
        <Component {...props}/>
      </Suspense>
    )
  }
}

function timeout(callback, time = 0){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(callback());
    }, time);
  })
}