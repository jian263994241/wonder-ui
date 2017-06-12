import React, {Component} from 'react'

import {Page, PageContent, ListView, ContentBlock, ContentBlockTitle, Bars} from 'kui'

const {List, ListItem, ListGroup, ListLabel} = ListView;


const {SubNavBar, Navbar} = Bars;

export default class SortableList extends Component {

  render() {
    return (
      <Page title="排序列表">
        <Navbar title="排序列表" back/>
        <PageContent>
          <List sortable sortableOpened onSorted={(e)=>console.log(e)}>
            <ListItem title="a"></ListItem>
            <ListItem title="b"></ListItem>
            <ListItem title="c"></ListItem>
          </List>
        </PageContent>
      </Page>
    );
  }
}
