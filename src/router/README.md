
# WonderUI - Router

```
npm install --save @wonder-ui/router
```


## Example

```jsx

import React, {Component} from 'react';
import {render} from 'react-dom';
import { Router } from '@wonder-ui/router';


const routeConfig = {
  animation: 'slide', //animation: PropTypes.oneOf(['slide', 'fade', 'scale']),
  type: 'hash', //type: PropTypes.oneOf(['browser', 'memory', 'hash']),
  animationDisabled: false,
  routes: [
    {
      path: '/', 
      exact: true,
      redirect: '/index'
    },
    {
      path: '/index', 
      component: Welcome,
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
  ]
};

render(
  <Router {...routeConfig}/>,
  document.getElementById('root')
)

```
