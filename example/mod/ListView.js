import React, {Component} from 'react'

import {Page, PageContent, ListView, ContentBlock, Bars} from 'kui'

const {List, ListItem, ListGroup, ListLabel} = ListView;

const {Title: ContentBlockTitle} = ContentBlock;

const {SubNavBar, Navbar} = Bars;

const Icon = ()=>{
  return (
    <img src="https://www.99bill.com/mobsup/static/bank/bank-icon/images/bank_bcom.png" width="29" height="29" alt=""/>
  );
}

export default class ListViewPage extends Component {

  render() {
    return (
      <Page title="列表">
        <Navbar title="列表" back/>
        <PageContent>
          <ContentBlockTitle>有图标的列表</ContentBlockTitle>
          <List>
            <ListItem title="Ivan Petrov" after="CEO" media={<Icon/>}/>
            <ListItem title="John Doe" badge="5" media={<Icon/>}/>
            <ListItem title="Jenna Smith" badge="new" badgeColor="red" media={<Icon/>}/>
          </List>
          <ContentBlockTitle>有图标的链接的列表</ContentBlockTitle>
          <List>
            <ListItem title="Ivan Petrov" after="CEO" media={<Icon/>} link/>
            <ListItem title="John Doe"  after="Cleaner" media={<Icon/>} link/>
            <ListItem title="Jenna Smith" media={<Icon/>} link/>
          </List>
          <ContentBlockTitle>没有图标的链接列表</ContentBlockTitle>
          <List>
            <ListItem title="Ivan Petrov" after="CEO" link/>
            <ListItem title="John Doe"  after="Cleaner" link/>
            <ListItem title="这里分隔" divider/>
            <ListItem title="John Doe"  after="Cleaner" link/>
          </List>
          <ContentBlockTitle>列表分组</ContentBlockTitle>
          <List>
            <ListGroup title="I">
              <ListItem title="Ivan Petrov"/>
              <ListItem title="Ivan Petrov2"/>
            </ListGroup>
            <ListGroup title="J">
              <ListItem title="Jenna Smith"/>
            </ListGroup>
          </List>
          <ContentBlockTitle>INSET</ContentBlockTitle>
          <List inset>
            <ListItem title="Ivan Petrov" after="CEO" media={<Icon/>}/>
            <ListItem title="John Doe" badge="5" media={<Icon/>}/>
            <ListItem title="Jenna Smith" badge="new" badgeColor="gray" media={<Icon/>}/>
          </List>

          <ContentBlockTitle>带LEBAL的列表</ContentBlockTitle>
          <List blockLabel="LEBAL在这里展示(可以是String,也可以是React Element)">
            <ListItem title="Ivan Petrov" after="CEO" link/>
            <ListItem title="John Doe"  after="Cleaner" link/>
          </List>

        </PageContent>
      </Page>
    );
  }
}
