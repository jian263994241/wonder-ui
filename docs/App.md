
```js 
import { App, Page, View, Link, Button, List, ListItem } from '@wonder-ui/core';

const LinkComponents = ({href, children})=>(
  <ListItem onClick={()=>location.assign('./#' + href)} arrow="horizontal">{children}</ListItem>
)

const Index = (props)=>(
  <Page>
    <List>
      <ListItem 
        onClick={()=>props.history.push('/sub')} 
        arrow="horizontal"
      >关于</ListItem>
    </List>
    <List renderHeader="组件">
      <LinkComponents href="/组件/布局/Flex">Flex</LinkComponents>
      <LinkComponents href="/组件/布局/Block">Block</LinkComponents>
      <LinkComponents href="/组件/布局/Toolbar">Toolbar</LinkComponents>
      <LinkComponents href="/组件/数据录入/Button">Button</LinkComponents>
      <LinkComponents href="/组件/数据录入/ToggleButtonGroup">ToggleButtonGroup</LinkComponents>
      <LinkComponents href="/组件/数据录入/Checkbox">Checkbox</LinkComponents>
      <LinkComponents href="/组件/数据展示/List">List</LinkComponents>
    </List>
  </Page>
)

const About = (props)=>(
  <Page>
    <Button onClick={()=> props.history.goBack()}>返回</Button>
  </Page>
)

const params = {
  routes: [
    { path: '/', exact: true, component: Index },
    { path: '/sub', component: About }
  ]
};

<App type="memory" routes={params.routes}> <View/> </App>
```