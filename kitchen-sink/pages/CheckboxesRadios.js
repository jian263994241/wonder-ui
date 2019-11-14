import React, {Component} from 'react';
import {Page, PageContent, Link} from '@wonder-ui/core';
import {List, ListItem, GroupTitle} from '@wonder-ui/components/ListView';
import {BlockTitle} from '@wonder-ui/components/ContentBlock';
import Checkbox from '@wonder-ui/components/Checkbox';


export default class CheckboxR extends Component {

  render() {
    return (
      <Page title="多选单选">
        <BlockTitle>多选</BlockTitle>

        <List>
          <ListItem title="Ivan Petrov" after="CEO" type="checkbox"></ListItem>
          <ListItem title="John Doe" after="2" type="checkbox"></ListItem>
          <ListItem title="Jenna Smith" type="checkbox"></ListItem>
        </List>
      </Page>
    )
  }
}
