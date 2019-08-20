import React from 'react';
import { Redirect } from 'react-router-dom';

export const getComponents = ({component, async, redirect})=>{
  if(async){
    return React.lazy(async);
  }

  if(typeof redirect === 'string'){
    return () => <Redirect to={redirect}/>
  }

  if(component.default){
    return component.default;
  }

  return component;
}