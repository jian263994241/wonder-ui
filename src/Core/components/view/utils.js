import React from 'react';
import { Redirect } from 'react-router-dom';

export const getComponents = ({component, async, redirect, ...passProps})=>{
  if(async){
    return React.lazy(()=>{
      return async(passProps).then(x => new Promise(resolve => setTimeout(() => resolve(x), 16)))
    });
  }

  if(typeof redirect === 'string'){
    return () => <Redirect to={redirect}/>
  }

  if(component.default){
    return component.default;
  }

  return component;
}