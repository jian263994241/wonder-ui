import warning from 'warning';
import isObject from '../isObject';

export default function styledProps({ defaultValue, ...map}, fallback) {
  return function styledCssFn(props) {
    const keysFromProps = Object.keys(map).filter(key => !!props[key]);
    
    warning(
      keysFromProps.length <= 1,
      `[styledProps] Multiple props provided: ${keysFromProps.join(', ')}.`
    );
    
    let keyFromProps = keysFromProps[0];
    
    if (fallback) {
      if (props[fallback] && map[props[fallback]] !== undefined) {
        keyFromProps = props[fallback];
      }
    }

    const styledCss = map[keyFromProps] || map[defaultValue];
    
    return renderCssfnInObject(styledCss, props);
  }
}



function renderCssfnInObject(styleObject, props = {}){
  if(isFunction(styleObject)){
    return deepCall(styleObject, props);
  }

  if(isObject(styleObject)){
    let result = { ...styleObject };

    for(let k in result){
      if(isFunction(result[k])){
        result[k] = deepCall(result[k], props);
      }
      // else if(typeof result[k] === 'string') {
      //   const marched = result[k].match(/(\$[\w\d]+)[^\s]/);
      //   if(marched){
      //     result[k] = result[k].replace(/(\$[\w\d]+)[^\s]/, deepCall(result[marched[0]], props));
      //   }
      // }
      else if(isObject(result[k])){
        result[k] = renderCssfnInObject(result[k], props);
      }
    }

    return result;
  }

  return styleObject;
}

function deepCall(callback, args) {
  let result = callback;
  if(isFunction(callback)){
    result = callback(args);
  }else{
    return result;
  }
  return deepCall(result, args);
}


function isFunction(fn){
  return typeof fn === 'function'
}