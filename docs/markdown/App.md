
创建一个入口文件`app.js` : 

```js static
import React from 'react';
import {render} from 'react-dom';
import { View, App } from '@wonder-ui/core';

import IndexPage from '~/kitchen-sink/pages/IndexPage';
import NoMatch from '~/kitchen-sink/pages/NoMatch';


const params = {
  //events bus
  on: {
    routeChange(props){
      //Change document.title
      // console.log('Route change', props);
    }
  },
  type: 'memory',
  routes: [
    {
      path: '/',
      component: IndexPage,
      children: [
        { path: 'about', component: require('~/kitchen-sink/pages/About'), name: 'about' },
        { path: 'button', component: require('~/kitchen-sink/pages/Button'), name: 'button' },
        ...
      ]
    },
  ]
}
;
<App {...params}>
  <View noMatch={<NoMatch/>}/>
</App>
```

创建首页`index.js` : 

```js static
import React from 'react';
import { Page, List, Block, ListItem, useRouterContext } from '@wonder-ui/core';

const LinkDetail = (props)=> {
  const { to, ...rest } = props;
  const { routerStore } = useRouterContext();
  const handleClick = React.useCallback(()=>{
    to && routerStore.push(to);
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
        <List renderHeader={()=> `组件`}>
          <LinkDetail to="/button">Button 按钮 </LinkDetail>
          <LinkDetail to="/checkable-group">CheckableGroup 选项</LinkDetail>
          <LinkDetail to="/date-picker">DatePicker 选择器</LinkDetail>
          <LinkDetail to="/dialog">Dialog 提示</LinkDetail>
          <LinkDetail to="/drawer">Drawer 抽屉</LinkDetail>
          <LinkDetail to="/form">Form 表单</LinkDetail>
          <LinkDetail to="/list-view">ListView 长列表</LinkDetail>
          <LinkDetail to="/list">List 列表</LinkDetail>
          <LinkDetail to="/picker">Picker 选择器</LinkDetail>
          <LinkDetail to="/preloader">Indicator 指示器</LinkDetail>
          <LinkDetail to="/searchbar">SearchBar 搜索</LinkDetail>
          <LinkDetail to="/tag">Tag 标签</LinkDetail>
          <LinkDetail to="/toolbar">Toolbar 工具栏</LinkDetail>
          <LinkDetail to="/typography">Typography 文字</LinkDetail>
        </List>
        <List renderHeader={()=> `主题`}>
          <LinkDetail to="/theme">Theme 主题</LinkDetail>
        </List>
        <List renderHeader={()=> `Router`}>
          <LinkDetail to="/route-transition">RouteTransition 页面过渡</LinkDetail>
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
      <ContentBlock>
        <p>
          基于React Hook(react@16.8)写的移动H5框架, 适用于微信, App内嵌页面, web浏览器
        </p>
      </ContentBlock>
    </Page>
  )
}
```