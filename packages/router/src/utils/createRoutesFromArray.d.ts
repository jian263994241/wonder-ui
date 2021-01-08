import { routeProps, PartialRouteObject } from '../types';

export function createRoutesFromArray(
  partialRoutes: PartialRouteObject[],
  parentPath?: string,
  _routes?: routeProps[]
): routeProps[];
