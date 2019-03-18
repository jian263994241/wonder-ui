import React, {Component} from 'react';
import {Page, PageContent, Link} from '~/src/Core';
import {List, ListItem, GroupTitle} from '~/src/ListView';
import {BlockTitle} from '~/src/ContentBlock';
import Checkbox from '~/src/Checkbox';


export default class CheckboxR extends Component {

  render() {
    console.log('render checkbox');
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
