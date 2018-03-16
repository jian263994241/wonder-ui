import React, {Component} from 'react';
import {Page, PageContent, Link} from '../../src/Core';
import {List, ListItem, GroupTitle} from '../../src/ListView';
import {BlockTitle} from '../../src/ContentBlock';
import Checkbox from '../../src/Checkbox';

export default class CheckboxR extends Component {

  render() {

    return (
      <Page title="多选单选">
        <BlockTitle>多选</BlockTitle>
        <label><input type="checkbox"/><Checkbox/>123</label>
        <List>
          <ListItem title="Ivan Petrov" after="CEO" media={<Checkbox id="a123"/>} as="label" htmlFor="a132"></ListItem>
          <ListItem title="John Doe" after="2" media={<Checkbox/>}></ListItem>
          <ListItem title="Jenna Smith" media={<Checkbox/>}></ListItem>
        </List>
      </Page>
    )
  }
}
