import React, {Component} from 'react'

import {Page, PageContent, ListView, ContentBlock, Bars , Form} from 'kui'

const {List, ListItem, ListGroup, ListLabel} = ListView;

const {FormLabel, FormInput} = Form;
const {Title: ContentBlockTitle} = ContentBlock;
const {SubNavBar, Navbar} = Bars;

export default class CheckboxsRadios extends Component {

  render() {
    return (
      <Page title="Checkboxs & Radios">
        <Navbar title="多选 & 单选" back/>
        <PageContent>
          <ContentBlockTitle>Checkbox group</ContentBlockTitle>
          <List>
            <ListItem checkbox name="demo-checkbox" title="checkbox 1"/>
            <ListItem checkbox name="demo-checkbox" title="checkbox 2"/>
            <ListItem checkbox name="demo-checkbox" title="default checked 3" checked/>
          </List>
          <ContentBlockTitle>Radio buttons group</ContentBlockTitle>
          <List>
            <ListItem radio name="demo-radio" title="Radio 1"/>
            <ListItem radio name="demo-radio" title="Radio 2"/>
            <ListItem radio name="demo-radio" title="default Radio 3" checked/>
          </List>
        </PageContent>
      </Page>
    );
  }
}
