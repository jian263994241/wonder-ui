import React, {Component} from 'react'

import {Page, PageContent, ListView, Block} from 'kui'

const {List, ListItem, ListGroup} = ListView;
const {ContentBlock, ContentBlockTitle} = Block;


class IndexPage extends Component {

  render() {
    const {
      history
    } = this.props;

    return (
      <Page title="UIKIT">
        <PageContent>
          <ContentBlockTitle>UIKIT</ContentBlockTitle>
          <ContentBlock>
            基于 React 构建的组件库
          </ContentBlock>
          <List>
            <ListItem title="基础" divider/>
            <ListItem title="Grid"/>
            <ListItem title="Swipeable" link to="/swipeable"/>
            <ListItem title="Icons"/>
            <ListItem title="Loadmore"/>
            <ListItem title="Lazy Load Images"/>

            <ListItem title="列表" divider/>
            <ListItem title="List View" link to="/ListView"/>
            <ListItem title="Media Lists" link to="/MediaLists"/>
            <ListItem title="Accordion List" link to="/AccordionList"/>
            <ListItem title="Sortable List" link/>
            <ListItem title="Swipe To Delete" link/>
            <ListItem title="Virtual List" link/>

            <ListItem title="表单" divider/>
            <ListItem title="Button"/>
            <ListItem title="Input"/>
            <ListItem title="Slider"/>

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

export default IndexPage;
