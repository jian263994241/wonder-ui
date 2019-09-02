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

/**
 * 在styled-components组件上过滤porps
 * @param {string} ele html节点
 * @param {array} uiProps 需要去掉的props
 */
export function styledTag(ele, uiProps = []){
  return (props)=> {
    const _props = Object.assign({}, props);
    
    delete _props['theme'];

    uiProps.forEach((removePropName)=>{
      delete _props[removePropName]
    })
    return React.createElement(ele, _props);
  };
}
/**
 * 转换html的prop true => 'true'
 * @param {*} key 
 * @param {*} value 
 */
export function htmlProp(key, props){
  return props[key] != undefined ? { [key]:  String(props[key]) } : {}
}