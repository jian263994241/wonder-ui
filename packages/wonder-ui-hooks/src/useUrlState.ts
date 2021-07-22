import * as React from 'react';
import { parse, stringify } from 'querystringify';
import { useSafeState } from './useSafeState';
interface Options {
  navigateMode?: 'push' | 'replace';
}

const getSearch = () => {
  const urlArray = location.href.split('?');
  const search = urlArray.length > 1 ? urlArray.pop() : '';

  return {
    urlArray,
    search
  };
};

const DelEmptyValue = (obj: { [k: string]: any }) => {
  for (let k in obj) {
    if (!obj[k]) {
      delete obj[k];
    }
  }
  return obj;
};

interface UrlState {
  [key: string]: any;
}

export const useUrlState = <S extends UrlState = UrlState>(
  initialState?: S | (() => S),
  options?: Options
) => {
  type state = Partial<{ [key in keyof S]: any }>;
  const { navigateMode = 'push' } = options || {};

  const { search = '', urlArray } = getSearch();
  const [, update] = useSafeState(false);

  const initialStateRef = React.useRef(
    typeof initialState === 'function'
      ? (initialState as () => S)()
      : initialState || {}
  );

  const queryFromUrl = React.useMemo(() => parse(search), [search]);

  const targetQuery: state = React.useMemo(
    () => ({
      ...initialStateRef.current,
      ...queryFromUrl
    }),
    [queryFromUrl]
  );

  const setState = (s: React.SetStateAction<state>) => {
    const newQuery = typeof s === 'function' ? (s as Function)(targetQuery) : s;

    // 1. 如果 setState 后，search 没变化，就需要 update 来触发一次更新。比如 demo1 直接点击 clear，就需要 update 来触发更新。
    // 2. update 和 history 的更新会合并，不会造成多次更新
    update((v) => !v);

    const merrgeData = DelEmptyValue({ ...queryFromUrl, ...newQuery });

    const newUrl = urlArray.concat(stringify(merrgeData, false)).join('?');

    if (navigateMode === 'push') {
      location.assign(newUrl);
    } else {
      location.replace(newUrl);
    }
  };

  return [targetQuery, setState] as const;
};

export default useUrlState;
