import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { WUI_link } from './styles';

const Link = (props)=>{
  const { to } = props;
  let Component = WUI_link;
  if(to){
    Component = WUI_link.withComponent(RouteLink);
  }
  return <Component {...props}/>
}


export default Link;