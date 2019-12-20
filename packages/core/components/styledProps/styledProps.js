import warning from 'warning';

export default function styledProps({ default: defaultPropKey, ...map}, fallback) {
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

    if (map[keyFromProps] !== undefined || map[defaultPropKey] !== undefined)  {
      return map[keyFromProps] || map[defaultPropKey];
    }
    
    warning(
      false,
      `[styledProps] Unknown fallback prop provided: ${fallback}.`
    );

    return undefined;
  }
}