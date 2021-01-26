/**
 * Safe chained function
 *
 * 返回一个连接的方法
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */

export default function createChainedFunction(...funcs: any[]) {
  return funcs.reduce(
    (acc, func) => {
      if (func == null) {
        return acc;
      }

      return function chainedFunction(this: any, ...args: any[]) {
        const self = this;
        acc.apply(self, args);
        func.apply(self, args);
      };
    },
    () => {}
  );
}
