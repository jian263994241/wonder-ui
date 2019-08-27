import React from 'react';
import { __RouterContext } from 'react-router-dom';

export default function usePageinit(){
  const router = React.useContext(__RouterContext);
  const [ pageInit, setInit ] = React.useState(false);
  const [ pageReInit, setReInit ] = React.useState(false);
  const { location, match } = router;
  const pathname = location.pathname;
  React.useEffect(()=>{
    if(pathname === match.url){
      if(pageInit){
        setReInit(true);
      }
      setInit(true);      
    }
  }, [pathname])
  
  return [pageInit, pageReInit]
}