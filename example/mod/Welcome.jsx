import React, {Component, createElement} from 'react';
import {Page, PageContent, Link} from '../../src/CreateApp';
import Preloader, {showPreloader, hidePreloader} from '../../src/Preloader';
import Button, {ButtonsRow} from '../../src/Button';
import {GridRow, GridCol} from '../../src/Grid';
import {List, ListItem} from '../../src/ListView';

export default class Welcome extends Component {

  // onRefresh = (scroller)=>{
  //   setTimeout(()=>{
  //     scroller.finishPullToRefresh()
  //   }, 2000)
  // }

  preloader = ()=>{
    showPreloader();

    setTimeout(()=>{
      hidePreloader();
    }, 2000)
  }

  render() {

    return (
      <Page>
        <PageContent>

          <List>
            <ListItem title="省市区选择器" to="/citys" as={Link}/>
            <ListItem title="时间选择器" to="/picker" as={Link}/>
            <ListItem title="短信倒计时" to="/countdown" as={Link}/>
            <ListItem title="键盘" to="/keyboard" as={Link}/>
            <ListItem title="弹窗" to="/popup" as={Link}/>
            <ListItem title="对话" to="/dialog" as={Link}/>
            <ListItem title="指示器" to="/citys" onClick={this.preloader}/>
            <ListItem title="折叠面板" to="/accordion" as={Link}/>
            <ListItem title="按钮" to="/buttons" as={Link}/>
            <ListItem title="Tabs" to="/tabs" as={Link}/>
            <ListItem title="列表" to="/list" as={Link}/>
            <ListItem title="媒体列表" to="/media-list" as={Link}/>
          </List>

        </PageContent>
      </Page>
    )
  }
}
