import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { WUI_link } from './styles';

const Link = React.forwardRef((props, ref)=>{
  const { to, href } = props;
  let Component = WUI_link;
  if(to){
    Component = WUI_link.withComponent(RouteLink);
  }

  if(href){
    Component = WUI_link.withComponent('a');
  }

  return (
    <Component {...props} ref={ref}/>
  )
})


export default Link;