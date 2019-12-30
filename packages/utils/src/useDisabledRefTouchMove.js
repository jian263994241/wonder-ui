import React from 'react';
import warning from 'tiny-warning';
import useEventCallback from './useEventCallback';
import isObject from './isObject';

//禁用touchmove
export default function useDisabledRefTouchMove(ref){

  warning(
    isObject(ref),
    'UseDisabledRefTouchMove Error: ref is not an object.'
  )

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