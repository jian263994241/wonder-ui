import React, {Component} from 'react'

import {Page, PageContent, ListView, ContentBlock} from 'kui'

const {List, ListItem, ListGroup} = ListView;
const {Title: ContentBlockTitle} = ContentBlock;

export default class IndexPage extends Component {

  onAccordionOpen = (index)=> ()=>{
    // console.log(index);
  }

  render() {
    const {
      history
    } = this.props;

    const style = {
      marginTop : 10
    };

    return (
      <Page title="组件库">
        <PageContent>
          <ContentBlockTitle style={{fontSize: '20px'}}>99BILL MOBILE UI</ContentBlockTitle>
          <ContentBlock>
            快钱包移动组件库
          </ContentBlock>
          <List accordion inset>
            <ListGroup>
              <ListItem title="列表" onAccordionOpen={this.onAccordionOpen(1)}>
                <List>
                  <ListItem title="列表视图" link to="/ListView"/>
                  <ListItem title="媒体列表" link to="/MediaLists"/>
                  <ListItem title="手风琴列表" link to="/AccordionList"/>
                  <ListItem title="虚拟列表" link to="/VirtualList"/>
                  <ListItem title="排序列表" link to="/SortableList"/>
                </List>
              </ListItem>
            </ListGroup>

            <ListGroup style={style}>
              <ListItem title="表单" onAccordionOpen={this.onAccordionOpen(2)}>
                <List>
                  <ListItem title="表单布局" link to="/FormElements"/>
                  <ListItem title="多选 & 单选" link to="/CheckboxesRadios"/>
                  <ListItem title="按钮" link to="/Buttons"/>
                </List>
              </ListItem>

            </ListGroup>

            <ListGroup style={style}>
              <ListItem title="基础组件" onAccordionOpen={this.onAccordionOpen(0)}>
                <List>
                  <ListItem title="九宫格" link to="/Grid"/>
                  <ListItem title="图片轮播" link to="/swipeable"/>
                  <ListItem title="图标" link to="/Icons"/>
                  <ListItem title="懒加载" link to="/LazyLoad"/>
                  <ListItem title="标签切换" link to="/Tab/Index"/>
                  <ListItem title="键盘" link to="/Keyboard"/>
                </List>
              </ListItem>
            </ListGroup>

            <ListGroup style={style}>
              <ListItem title="操作" onAccordionOpen={this.onAccordionOpen(3)}>
                <List>
                  <ListItem title="模态框 Modals" link to="/Modals"/>
                  <ListItem title="选择器" link to="/Picker"/>
                  <ListItem title="指示器" link to="/Preloader"/>
                  <ListItem title="无限滚动" link to="/InfiniteScroll"/>
                  <ListItem title="下拉刷新" link to="/PullToRefresh"/>
                </List>
              </ListItem>
            </ListGroup>
          </List>

        </PageContent>
      </Page>
    );
  }
}
