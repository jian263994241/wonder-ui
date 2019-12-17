import React from 'react';
import { Redirect } from 'react-router-dom';
import loadable from "@loadable/component";


export default function useComponent({ async, fallback, component, redirect }) {
  return React.useMemo(()=>{
    if(typeof async === 'function') {
      return loadable(()=> timeout(async, 0), {fallback});
    }else if(typeof redirect === 'string') {
      return function RedirectTo() {
        return <Redirect to={redirect}/>;
      }
    }else if(component) {
      return loadable(()=>timeout(() => Promise.resolve(component.default || component), 0));
    };
  }, []);
}

function timeout(callback, time = 0){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(callback());
    }, time);
  })
}