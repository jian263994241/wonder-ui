import React from 'react';
import loadable from '@loadable/component';
import { Redirect } from 'react-router-dom';

export const getComponents = ({component, async, redirect})=>{
  if(async){
    return loadable(
      () => new Promise((resolve, reject) => async(history, resolve, reject))
    );
  }

  if(typeof redirect === 'string'){
    return () => <Redirect to={redirect}/>
  }

  if(typeof redirect === 'function'){
    return loadable(
      ()=> new Promise(
        (resolve, reject) => redirect(history, resolve, reject)
      )
      .then((url, props)=> () => <Redirect to={url} {...props}/> )
    )
  }

  if(component.default){
    return component.default;
  }

  return component;
}