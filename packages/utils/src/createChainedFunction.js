import warning from 'tiny-warning';
/**
 * Safe chained function
 *
 * 返回一个连接的方法
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
export default function createChainedFunction(...funcs) {
  return funcs.reduce(
    (acc, func) => {
      if (func == null) {
        return acc;
      }
      
      warning(
        typeof func === 'function',
        'createChainedFunction: invalid Argument Type, must only provide functions, undefined, or null.'
      )
      
      return function chainedFunction(...args) {
        acc.apply(this, args);
        func.apply(this, args);
      };
    },
    () => {},
  );
}