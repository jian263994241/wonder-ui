import loadable from '@loadable/component';

const normalizeSlashes = (path) => path.replace(/\/\/+/g, '/');
const joinPaths = (paths = []) => normalizeSlashes(paths.join('/'));

export function createRoutesFromArray(
  partialRoutes = [],
  parentPath = '',
  _routes = [],
) {
  partialRoutes.forEach((partialRoute) => {
    let route = {
      path: joinPaths([parentPath, partialRoute.path || '/']),
      element: partialRoute.element
        ? partialRoute.element
        : partialRoute.async
        ? loadable(partialRoute.async)
        : partialRoute.component,
      exact: partialRoute.exact,
    };

    _routes.push(route);

    if (partialRoute.children) {
      createRoutesFromArray(partialRoute.children, route.path, _routes);
    }
  });

  return _routes;
}

export default createRoutesFromArray;
