import React, {Component} from 'react'

import {Page, PageContent, ListView, ContentBlock} from 'kui'

const {List, ListItem, ListGroup} = ListView;
const {Title} = ContentBlock;


class IndexPage extends Component {
  render() {
    return (
      <Page title="UIKIT">
        <PageContent>
          <Title>UIKIT</Title>
          <ContentBlock>
            基于 React 构建的组件库
          </ContentBlock>
          <Title>基础</Title>
          <List>
            <ListItem title="Grid"/>
            <ListItem title="Swipeable" link="swipeable"/>
            <ListItem title="Icons"/>
            <ListItem title="Loadmore"/>
          </List>
          <Title>表单</Title>
          <List>
            <ListItem title="Button"/>
            <ListItem title="Input"/>
            <ListItem title="Picker"/>
            <ListItem title="Slider"/>
          </List>
          <Title>列表</Title>
          <List>
            <ListItem title="ListView"/>
          </List>
        </PageContent>
      </Page>
    );
  }
}

export default IndexPage;
