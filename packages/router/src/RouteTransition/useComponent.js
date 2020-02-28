import React from 'react';
import { Redirect } from 'react-router-dom';
import loadable from "@loadable/component";


export default function useComponent(data) {
  return React.useMemo(()=> createAsyncComponent(data), []);
}


function createAsyncComponent({ async, component, redirect }){
  if(typeof redirect === 'string') {
    return () => <Redirect to={redirect}/>
  }

  if(component){
    return component.default || component;
  }

  if(typeof async === 'function'){
    return loadable(timeout(async, 30));
  }
}

function timeout(callback, time = 0){
  return () => new Promise(resolve =>{
    setTimeout(() => {
      resolve(callback());
    }, time);
  })
}


