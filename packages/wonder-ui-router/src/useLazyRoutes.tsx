import * as React from 'react';
import { useRoutes as useRoutesOrigin, PartialRouteObject } from 'react-router';
import loadable, { LoadableComponentProps } from './utils/loadable';

export interface PartialLazyRouteObject extends PartialRouteObject {
  element?: React.ReactNode | LoadableComponentProps['lazy'];
  children?: PartialLazyRouteObject[];
}

interface LazyLoadOptions {
  processor?: (route: PartialLazyRouteObject) => void;
}

export function lazyLoad(
  array: PartialLazyRouteObject[],
  options: LazyLoadOptions = {}
): PartialRouteObject[] {
  return array.map((route) => {
    if (typeof route.element === 'function') {
      route.element = loadable({
        lazy: route.element as LoadableComponentProps['lazy'],
        element: true
      });
    }
    if (options.processor) {
      options.processor(route);
    }

    if (route.children) {
      route.children = lazyLoad(route.children, options);
    }

    return route;
  });
}

export default function useLazyRoutes(
  array: PartialLazyRouteObject[],
  basename?: string
) {
  return useRoutesOrigin(lazyLoad(array), basename);
}
