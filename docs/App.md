
```jsx
import { App, Page, View, Link, Button } from '@wonder-ui/core';
import { MemoryRouter } from 'react-router-dom';

const params = {
  routes: [
    {
      path: '/',
      exact: true,
      component: ()=> (
        <Page>
          当前在首页, 
          <p>
             Link <Link to="/sub">下一页</Link>
          </p>
          <p>
             Button <Button to="/sub">下一页</Button>
          </p>
        </Page>
      )
    },
    {
      path: '/sub',
      exact: true,
      component: (props)=> (
        <Page>
          <Button onClick={()=> props.history.goBack()}>返回</Button>
        </Page>
      )
    },
  ]
};

<div className="mobile-preview">
  <App router={MemoryRouter} routes={params.routes}>
    <View/>
  </App>
</div>
```