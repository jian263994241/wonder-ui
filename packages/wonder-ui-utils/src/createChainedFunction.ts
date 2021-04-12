import StackManager from './StackManager';
import isPromise from './isPromise';

/**
 * Safe chained function
 *
 * 返回一个连接的方法
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */

export default function createChainedFunction(...funcs: any[]) {
  const manager = new StackManager();
  return funcs.reduce(
    (acc, func) => {
      if (func == null) {
        return acc;
      }

      return function chainedFunction(this: any, ...args: any[]) {
        const self = this;

        manager.run((next) => {
          const promise = acc.apply(self, args);

          if (isPromise(promise)) {
            return promise;
          } else {
            next();
          }
        });

        manager.run((next) => {
          const promise = func.apply(self, args);

          if (isPromise(promise)) {
            return promise;
          } else {
            next();
          }
        });
      };
    },
    () => {}
  );
}
