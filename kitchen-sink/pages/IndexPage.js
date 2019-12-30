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
        <LinkDetail to="/button">Button 按钮 </LinkDetail>
        <LinkDetail to="/date-picker">DatePicker 选择器</LinkDetail>
        <LinkDetail to="/dialog">Dialog 提示</LinkDetail>
        <LinkDetail to="/drawer">Drawer 抽屉</LinkDetail>
        <LinkDetail to="/lcn-picker">LcnPicker 选择器</LinkDetail>
        <LinkDetail to="/picker">Picker 选择器</LinkDetail>
        <LinkDetail to="/preloader">Indicator 指示器</LinkDetail>
        <LinkDetail to="/searchbar">SearchBar 搜索</LinkDetail>
        <LinkDetail to="/tag">Tag 标签</LinkDetail>
        <LinkDetail to="/toggle-button">ToggleButton 切换按钮</LinkDetail>
        <LinkDetail to="/toolbar">Toolbar 工具栏</LinkDetail>
        <LinkDetail to="/typography">Typography 文字</LinkDetail>
      </List>
    </Page>
  )
}