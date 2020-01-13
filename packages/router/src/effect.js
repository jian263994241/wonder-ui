import React from 'react';
import UIRouteContext from './UIRouteContext';
import useEnhancedEffect from '@wonder-ui/utils/useEnhancedEffect';

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
      useEnhancedEffect(()=>{
        setTimeout(() => setVisible(true), timeout);
      }, [delay]);
  
      if(!visible) {
        return (Skeleton && typeof Skeleton === 'function') ? 
        ( <Skeleton {...props}/> ): null;
      }
  
      return (
        <Element {...props}/>
      )
    }
  }

}