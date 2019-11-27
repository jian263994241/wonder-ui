
#### 基本使用

```jsx
import { App, Page, View, Link, Button, RouterStore } from '@wonder-ui/core';

const routing = new RouterStore();

const params = {
  routes: [
    {
      path: '/',
      exact: true,
      component: ()=> (
        <Page>
          当前在首页, 
          <p>
            <Button onClick={()=>routing.push('/sub')}>下一页</Button>
          </p>
        </Page>
      )
    },
    {
      path: '/sub',
      exact: true,
      component: (props)=> (
        <Page>
          <Button onClick={()=> routing.history.goBack()}>返回</Button>
        </Page>
      )
    },
  ]
};



<div className="mobile-preview">
  <App historyType="memory" routerStore={routing} routes={params.routes}>
    <View/>
  </App>
</div>
```