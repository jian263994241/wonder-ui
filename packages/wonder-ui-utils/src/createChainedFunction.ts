import { StackManager } from './StackManager';
import { isPromise } from './validate';

/**
 * Safe chained function
 *
 * 返回一个连接的方法
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */

export function createChainedFunction(...funcs: any[]) {
  const manager = new StackManager();

  return function chainedFunction(self: any, ...args: any[]) {
    funcs.forEach((func) => {
      manager.run((next) => {
        const promise = func?.apply(self, args);

        if (isPromise(promise)) {
          return promise;
        } else {
          next();
        }
      });
    });
  };
}
