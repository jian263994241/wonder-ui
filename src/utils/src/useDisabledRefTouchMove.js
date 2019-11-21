import React from 'react';
import useEventCallback from './useEventCallback';

//禁用touchmove
export default function useDisabledRefTouchMove(ref){

  const disableTouchMove = useEventCallback((e)=>{
    e.preventDefault();
  });

  React.useEffect(()=>{
    if(ref.current){
      const root = ref.current;    
      root.addEventListener('touchmove', disableTouchMove, {passive: false});
      return ()=>{
        root.removeEventListener('touchmove', disableTouchMove, {passive: false});
      }
    }
  }, [ref.current]);
}