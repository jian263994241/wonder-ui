import React, {Component} from 'react'

import {Page, PageContent, ListView, ContentBlock, ContentBlockTitle} from 'kui'

const {List, ListItem, ListGroup} = ListView;

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
          <ContentBlockTitle style={{fontSize: '20px'}}>wonderjs</ContentBlockTitle>
          <ContentBlock>
            快钱包移动组件库
          </ContentBlock>
          <List accordion inset>
            <ListGroup>
              <ListItem accordionItem title="列表" onAccordionOpen={this.onAccordionOpen(1)}>
                <List>
                  <ListItem title="列表视图" link="/ListView"/>
                  <ListItem title="媒体列表" link="/MediaLists"/>
                  <ListItem title="手风琴列表" link="/AccordionList"/>
                  <ListItem title="虚拟列表" link="/VirtualList"/>
                  <ListItem title="排序列表" link="/SortableList"/>
                </List>
              </ListItem>
            </ListGroup>

            <ListGroup style={style}>
              <ListItem accordionItem title="表单" onAccordionOpen={this.onAccordionOpen(2)}>
                <List>
                  <ListItem title="表单布局" link="/FormElements"/>
                  <ListItem title="多选 & 单选" link="/CheckboxesRadios"/>
                  <ListItem title="按钮" link="/Buttons"/>
                </List>
              </ListItem>
            </ListGroup>

            <ListGroup style={style}>
              <ListItem accordionItem title="基础组件" onAccordionOpen={this.onAccordionOpen(0)}>
                <List>
                  <ListItem title="九宫格" link="/Grid"/>
                  <ListItem title="图片轮播" link="/swipeable"/>
                  <ListItem title="图标" link="/Icons"/>
                  <ListItem title="懒加载" link="/LazyLoad"/>
                  <ListItem title="标签切换" link="/Tab/Index"/>
                  <ListItem title="键盘" link="/Keyboard"/>
                </List>
              </ListItem>
            </ListGroup>

            <ListGroup style={style}>
              <ListItem accordionItem title="操作" onAccordionOpen={this.onAccordionOpen(3)}>
                <List>
                  <ListItem title="模态框 Modals" link="/Modals"/>
                  <ListItem title="选择器" link="/Picker"/>
                  <ListItem title="指示器" link="/Preloader"/>
                  <ListItem title="无限滚动" link="/InfiniteScroll"/>
                  <ListItem title="下拉刷新" link="/PullToRefresh"/>
                </List>
              </ListItem>
            </ListGroup>
          </List>

        </PageContent>
      </Page>
    );
  }
}
