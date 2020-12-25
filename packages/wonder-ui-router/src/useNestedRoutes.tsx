import * as React from 'react';
import {
  useRoutes as useRoutesOrigin,
  Outlet,
  PartialRouteObject
} from 'react-router';
import { PartialLazyRouteObject, lazyLoad } from './useLazyRoutes';
import View from './layout/View';
import Pages from './layout/Pages';
import NestedTransition from './NestedTransition';

function lazyLoad_(array: PartialLazyRouteObject[]): PartialRouteObject[] {
  return lazyLoad(array, {
    processor(route) {
      const { element, children = [] } = route;

      if (children.length > 0) {
        if (element) {
          route.element = (
            <React.Fragment>
              {/* <NestedTransition>{element}</NestedTransition> */}
              {element}
              <Outlet />
            </React.Fragment>
          );
        }
      }
    }
  });
}

export default function useRoutes(
  array: PartialLazyRouteObject[],
  basename?: string
) {
  const routes = useRoutesOrigin(lazyLoad_(array), basename);
  console.log(routes);

  return routes;
  return <View>{routes}</View>;
}
