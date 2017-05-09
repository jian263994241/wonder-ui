import React, {Component} from 'react'

import {Page, PageContent, ListView, Block} from 'kui'

const {List, ListItem, ListGroup} = ListView;
const {ContentBlock, ContentBlockTitle} = Block;

// <ListItem title="导航" divider/>
// <ListItem title="导航栏 NavigationBar"/>
// <ListItem title="工具栏 ToolBar"/>
// <ListItem title="标签栏 TabBar"/>
// <ListItem title="搜索栏 SearchBar"/>
// <ListItem title="气泡 Popup"/>
//
// <ListItem title="操作" divider/>
//
// <ListItem title="表单组合(Form)-日期选择、性别、开关"/>
// <ListItem title="图片选择(ImagePicker)"/>
// <ListItem title="筛选器(Filter"/>
// <ListItem title="键盘(Keyboard）"/>
// <ListItem title="输入(Input)"/>
// <ListItem title="操作表(ActionSheet)"/>

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
            <ListItem title="九宫格" link to="/Grid"/>
            <ListItem title="图片轮播" link to="/swipeable"/>
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
            <ListItem title="模态框 Modals" link to="/Modals"/>
            <ListItem title="选择器" link to="/Picker"/>
            <ListItem title="指示器" link to="/Preloader"/>
            <ListItem title="无限滚动" link to="/InfiniteScroll"/>
            <ListItem title="下拉刷新" link to="/PullToRefresh"/>

          </List>

        </PageContent>
      </Page>
    );
  }
}
