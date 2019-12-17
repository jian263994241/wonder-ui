import React from 'react';
import { Page, List, ListItem, useRouterContext } from '@wonder-ui/core';

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
      showBackButton={false}
    >
      <List renderHeader={()=> ``}>
        <LinkDetail to="/about">关于 Wonder UI</LinkDetail>
      </List>
      <List renderHeader={()=> `组件`}>
        <LinkDetail to="/button">Button 按钮</LinkDetail>
        <LinkDetail to="/drawer">Drawer 抽屉</LinkDetail>
      </List>
    </Page>
  )
}