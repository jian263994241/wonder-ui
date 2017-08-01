import React, {Component} from 'react'

export function mounted(content, reactElement){
  if(!content) return null;
  return React.cloneElement(reactElement, null , content);
}
