
创建一个入口文件`app.js` :

```js static
import React from 'react';
import { render } from 'react-dom';
import { App, HashRouter, Routes } from '@wonder-ui/core';

import IndexPage from '~/kitchen-sink/pages/IndexPage';
import NoMatch from '~/kitchen-sink/pages/NoMatch';


const routes = [
  {
    path: '/',
    component: IndexPage,
    children: [
      { path: 'about', component: require('~/kitchen-sink/pages/About')},
      { path: 'button', component: require('~/kitchen-sink/pages/Button')},
      ...
    ]
  },
]

;
<HashRouter>
  <App onPageInit={({ name })=>{}}>
    <Routes noMatch={<NoMatch/>} onRouteChange={(location, action)=>{}}/>
  </App>
</HashRouter>
```

创建首页`index.js` :

```js static
import React from 'react';
import { Page, List, Block, ListItem } from '@wonder-ui/core';
import { useNavigation } from '@wonder-ui/router';

const LinkDetail = (props)=> {
  const { to, ...rest } = props;
  const { push } = useNavigation();

  const handleClick = React.useCallback(()=>{
    to && push(to);
  }, [to]);
  return <ListItem onClick={handleClick} arrow="horizontal" {...rest}/>;
}

export default function IndexPage(props) {

  return (
    <Page
      name="Wonder UI"
      navbar
      showBack={false}
    >
      <Block bottom={10}>
        <List renderHeader={()=> ``}>
          <LinkDetail to="/about">关于 Wonder UI</LinkDetail>
        </List>
      </Block>
    </Page>
  )
}
```

创建内页`about.js` :

```js static
import React from 'react';
import { Page, ContentBlock } from '@wonder-ui/core';

export default function About(props) {

  return (
    <Page name="关于" navbar >
      <p>
        基于React Hook(react@16.8)写的移动H5框架, 适用于微信, App内嵌页面, web浏览器
      </p>
    </Page>
  )
}
```
