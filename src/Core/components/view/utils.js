import React from 'react';
import { Redirect } from 'react-router-dom';
import { duration } from '../styles/transitions';

console.log(duration.complex * 2);


export const getComponents = ({component, async, redirect})=>{
  if(async){
    return React.lazy(async);
    // return React.lazy(()=>{
    //   return new Promise(resolve => {
    //     setTimeout(() => resolve(async()), duration.complex * 0.01)
    //   })
    // });
  }

  if(typeof redirect === 'string'){
    return () => <Redirect to={redirect}/>
  }

  if(component.default){
    return component.default;
  }

  return component;
}