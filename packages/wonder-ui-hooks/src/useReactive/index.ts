import * as React from 'react';
import { nextTick } from '@wonder-ui/utils';
import { useCreation } from '../useCreation';
import { useSafeState } from '../useSafeState';

const proxyMap = new WeakMap();
const rawMap = new WeakMap();

function isObject(val: any): val is object {
  const typeString = Object.prototype.toString.call(val).toLocaleLowerCase();
  return typeString === '[object object]' || typeString === '[object array]';
}

function isRefObject(val: any): val is React.MutableRefObject<any> {
  return 'current' in val;
}

function observer<T extends object>(initialVal: T, cb: () => void): T {
  const existingProxy = proxyMap.get(initialVal);

  // 添加缓存 防止重新构建proxy
  if (existingProxy) {
    return existingProxy;
  }

  //虚拟dom | refObject 不做代理
  if (React.isValidElement(initialVal) || isRefObject(initialVal)) {
    return initialVal;
  }

  // 防止代理已经代理过的对象
  // https://github.com/alibaba/hooks/issues/839
  if (rawMap.has(initialVal)) {
    return initialVal;
  }

  const proxy = new Proxy<T>(initialVal, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver);
      return isObject(res) ? observer(res, cb) : Reflect.get(target, key);
    },
    set(target, key, val) {
      //@ts-expect-error
      if (target[key] != val) {
        const ret = Reflect.set(target, key, val);
        cb();

        return ret;
      }

      return true;
    },
    deleteProperty(target, key) {
      const ret = Reflect.deleteProperty(target, key);
      cb();
      return ret;
    }
  });

  proxyMap.set(initialVal, proxy);
  rawMap.set(proxy, initialVal);

  return proxy;
}

export function useReactive<S extends object>(initialState: S): S {
  const [, setFlag] = useSafeState({});
  const stateRef = React.useRef<S>(initialState);

  const state = useCreation(() => {
    return observer(stateRef.current, () => {
      nextTick(() => {
        setFlag({});
      });
    });
  }, []);

  return state;
}
