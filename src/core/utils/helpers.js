import warning from 'warning';

export function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
}

/**
 * Safe chained function
 *
 * 返回一个连接的方法
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
export function createChainedFunction(...funcs) {
  return funcs.reduce(
    (acc, func) => {
      if (func == null) {
        return acc;
      }
      warning(
        typeof func === 'function',
        'createChainedFunction: invalid Argument Type, must only provide functions, undefined, or null.',
      );

      return function chainedFunction(...args) {
        acc.apply(this, args);
        func.apply(this, args);
      };
    },
    () => {},
  );
}

/**
 * 合并classname
 */
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

/**
 * 生成id
 * @param {*} mask 
 * @param {*} map 
 */
export function idxx(mask = 'xxxxxxxxxx', map = '0123456789abcdef') {
  const length = map.length;
  return mask.replace(/x/g, () => map[Math.floor((Math.random() * length))]);
};

/**
 * It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
 * A strict capitalization should uppercase the first letter of each word a the sentence.
 * We only handle the first word.
 */
export function capitalize(string) {
  if (process.env.NODE_ENV !== 'production') {
    if (typeof string !== 'string') {
      throw new Error('Capitalize(string) expects a string argument.');
    }
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}