import React, { createElement, Component } from 'react';
import {Link, Page} from '@wonder-ui/core';
import {List, ListItem, ListItemDivider} from '@wonder-ui/components/ListView';
import Preloader, {hidePreloader, showPreloader} from '@wonder-ui/components/Preloader';

export default class Welcome extends Component {

  preloader = ()=>{
    showPreloader();
    hidePreloader();
    // setTimeout(()=>{
    //   hidePreloader();
    // }, 2000)
  }

  render() {

    return (
      <Page 
        name="首页"
        classes={{
          root: `color: red;`
        }}
      >
        <div slot="pageContentBefore" >pageContentBefore</div>
        <List>
          <ListItem title="省市区选择器" to="/citys" as={Link} arrow/>
          <ListItem title="时间选择器" to="/picker" as={Link} arrow/>
          <ListItem title="短信倒计时" to="/countdown" as={Link} arrow/>
          <ListItem title="单选&多选" to="/CheckboxesRadios?a=1" as={Link} arrow/>
          <ListItem title="键盘" to="/keyboard" as={Link} arrow/>
          <ListItem title="弹窗" to="/popup" as={Link} arrow/>
          <ListItem title="对话" to="/dialog" as={Link} arrow/>
          <ListItem title="指示器" to="/citys" onClick={this.preloader}/>
          <ListItem title="折叠面板" to="/accordion" as={Link} arrow/>
          <ListItem title="按钮" to="/buttons" as={Link} arrow/>
          <ListItem title="Tabs" to="/tabs" as={Link} arrow/>
          <ListItem title="列表" to="/list" as={Link} arrow/>
          <ListItem title="媒体列表" to="/media-list" as={Link} arrow/>
          <ListItem title="左划删除" to="/swipe-out" as={Link} arrow/>
          <ListItem title="输入框" to="/inputs" as={Link} arrow/>
          <ListItem title="栅格" to="/grid" as={Link} arrow/>
          <ListItemDivider/>
          <ListItem title="文档" as="a" href="https://github.com/jian263994241/wonderjs/tree/master/docs" target="_blank"/>
        </List>
      </Page>
    )
  }
}
