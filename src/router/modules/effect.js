import React from 'react';
import UIRouteContext from './UIRouteContext';
import * as ReactIs from "react-is";

export default function effect(options = {}){
  const {
    delay,
    skeleton: Skeleton
  } = options;
 
  return (Element)=>{

    return (props)=>{
      const [visible, setVisible] = React.useState(false);
      const routeContext = React.useContext(UIRouteContext);
      const timeout = delay || routeContext.timeout || 0;
      React.useEffect(()=>{
        setTimeout(() => setVisible(true), timeout);
      }, [delay]);
  
      if(!visible) {
        return (Skeleton && ReactIs.isValidElementType(Skeleton)) ? 
        ( <Skeleton {...props}/> ): null;
      }
  
      return (
        <Element {...props}/>
      )
    }
  }

}