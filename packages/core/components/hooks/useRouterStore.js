import { useRouterContext } from '@wonder-ui/router';


export default function useRouterStore(){
  const { routerStore } = useRouterContext();
  return routerStore;
}