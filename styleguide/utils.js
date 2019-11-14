
export function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
}

export function classnames(){
  const cls = [].slice.apply(arguments);
  if(isObject(cls[0])){ 
    const result = [];
    for(let k in cls[0]){
      if(!!cls[0][k]){
        result.push(k);
      }
    }
    return result.join(' ');
  }
  return cls.join(' ');
}
