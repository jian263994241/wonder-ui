
# @wonder-ui/router

基于`react-router-dom@5`封装的 moble-router

```
npm install --save @wonder-ui/router
```

## Example

```jsx

import * as React from 'react';
import { HashRouter as Router, Routes } from '@wonder-ui/router';

export default function App(){
  return (
    <HashRouter>
      <Routes routes={[
      {
        path: '/index',
        //component: Welcome,
        //async: () => Promise<Welcome>
        element: <Welcome/>,
        children: [
          {
            path: 'citys',
            async: ()=>import('./pages/Citys')
          },
          {
            path: 'picker',
            async: ()=>import('./pages/Picker')
          },
        ]
      },
    ]}/>
    </HashRouter>
  )
}

```


## <Routes/>

```tsx

export interface PartialRouteObject {
  path: string;
  exact?: boolean;
  element?: React.ReactNode;
  component?: React.ComponentType;
  async?: () => Promise<React.ComponentType>;
  children?: PartialRouteObject[];
}


export interface RoutesProps {
  routes: PartialRouteObject[];
  animation?: 'slide' | 'fade' | 'scale';
  animationDisabled?: boolean;
  noMatch?: React.ReactNode;
  onRouteChange?: (location: Location, action: string) => void;
}
```

## hooks

```tsx

export interface Location {
  hash?: string;
  query?: object;
  search?: string;
  pathname: string;
  state?: any;
}

export function useLocation(): Location;

export function useLocationExact(): Location;

export function usePageEffect(
  callback: () => (() => any) | void,
  vars: any[]
): void;

export function useNavigation(): {
  goBack: () => void;
  goForward: () => void;
  push: (loc: string | Partial<Location>, state?: any) => void;
  replace: (loc: string | Partial<Location>, state?: any) => void;
};

```

## 其他

react-router : https://reactrouter.com/web/api/Hooks
