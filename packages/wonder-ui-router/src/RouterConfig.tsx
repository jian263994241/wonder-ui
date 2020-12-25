import useNestedRoutes from './useNestedRoutes';

export interface RouterConfig {}

export default function RouterConfig(props: RouterConfig) {
  const routes = useNestedRoutes([
    {
      path: '/a',
      element: () => import('../actors/PageA'),
      children: [
        {
          path: 'b',
          element: () => import('../actors/PageB'),
          children: [
            {
              path: 'c',
              element: () => import('../actors/PageC')
            }
          ]
        }
      ]
    }
  ]);

  // console.log(routes);

  return routes;
}
