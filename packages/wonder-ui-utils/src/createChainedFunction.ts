import { StackManager } from './StackManager';
import { isPromise } from './is';

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
  return funcs.reduce(
    (acc, func) => {
      if (func == null) {
        return acc;
      }

      return function chainedFunction(self: any, ...args: any[]) {
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
