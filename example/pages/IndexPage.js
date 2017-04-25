import React, {Component} from 'react'

import {Page, PageContent, ListView, Block} from 'kui'

const {List, ListItem, ListGroup} = ListView;
const {ContentBlock, ContentBlockTitle} = Block;


export default class IndexPage extends Component {

  render() {
    const {
      history
    } = this.props;

    return (
      <Page title="组件库">
        <PageContent>
          <ContentBlockTitle>UIKIT</ContentBlockTitle>
          <ContentBlock>
            基于 React 构建的组件库
          </ContentBlock>
          <List>
            <ListItem title="基础" divider/>
            <ListItem title="栅格" link to="/Grid"/>
            <ListItem title="图片滑块" link to="/swipeable"/>
            <ListItem title="图标" link to="/Icons"/>
            <ListItem title="懒加载" link to="/LazyLoad"/>
            <ListItem title="标签切换" link to="/Tab"/>

            <ListItem title="列表" divider/>
            <ListItem title="列表视图" link to="/ListView"/>
            <ListItem title="媒体列表" link to="/MediaLists"/>
            <ListItem title="手风琴列表" link to="/AccordionList"/>
            <ListItem title="虚拟列表" link to="/VirtualList"/>

            <ListItem title="表单" divider/>
            <ListItem title="表单布局" link to="/FormElements"/>
            <ListItem title="多选 & 单选" link to="/CheckboxesRadios"/>
            <ListItem title="按钮" link to="/Buttons"/>

            <ListItem title="反馈" divider/>
            <ListItem title="Modals" />
            <ListItem title="Popover" />
            <ListItem title="Picker" />
            <ListItem title="Preloader" />
            <ListItem title="Infinite Scroll" />
            <ListItem title="Pull To Refresh" />

            <ListItem title="导航" divider/>
            <ListItem title="Navbar"/>
            <ListItem title="Subnavbar"/>
            <ListItem title="Toolbar"/>
          </List>

        </PageContent>
      </Page>
    );
  }
}
