import React from 'react';

/**
 * Creates DOM element to be used as React root.
 * @returns {HTMLElement}
 */
export function createRootElement(id) {
  const rootContainer = document.createElement('div');
  id && rootContainer.setAttribute('id', id);
  return rootContainer;
}

export function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

export function useForkRef(refA, refB) {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior
   */
  return React.useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }
    return refValue => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}

export function isUiElement(element, uiName) {
  return React.isValidElement(element) && muiNames.indexOf(element.type.uiName) !== -1;
}

//禁用touchmove
export function useDisabledRefTouchMove(ref){
  React.useEffect(()=>{
    const disableTouchMove = (e)=>{
      e.preventDefault();
    };
    if(ref.current){
      const root = ref.current;    
      root.addEventListener('touchmove', disableTouchMove, false);
      return ()=>{
        root.removeEventListener('touchmove', disableTouchMove, false);
      }
    }
  }, [ref.current]);
}

/**
 * 转换html的prop true => 'true'
 * @param {*} key 
 * @param {*} value 
 */
export function htmlProp(key, props){
  return props[key] != undefined ? { [key]:  String(props[key]) } : {}
}