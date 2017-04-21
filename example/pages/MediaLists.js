import React, {Component} from 'react'

import {Page, PageContent, ListView, Block, Navbar} from 'kui'

const {List, ListItem, ListGroup, ListLabel} = ListView;

const {ContentBlock, ContentBlockTitle} = Block;

const Icon = ()=>{
  return (
    <img src="https://www.99bill.com/mobsup/static/bank/bank-icon/images/bank_bcom.png" width="44" height="44" alt=""/>
  );
}

export default class MediaViewPage extends Component {

  render() {
    return (
      <Page title="Media List" navbarFixed>
        <Navbar title="媒体列表" back backText="返回"/>
        <PageContent>
          <ContentBlockTitle>有图标的</ContentBlockTitle>
          <List mediaList>
            <ListItem title="Ivan Petrov" subtitle="Beatles" after="$15" img={<Icon/>} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."/>
            <ListItem title="Ivan Petrov" subtitle="Beatles" link after="$15" img={<Icon/>} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."/>
          </List>
          <ContentBlockTitle>没有图标的</ContentBlockTitle>
          <List mediaList>
            <ListItem title="Ivan Petrov" subtitle="Beatles" after="$15" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."/>
            <ListItem title="Ivan Petrov" subtitle="Beatles" link after="$15" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."/>
          </List>
          <ContentBlockTitle>没有说明文字的</ContentBlockTitle>
          <List mediaList>
            <ListItem title="Ivan Petrov" subtitle="Beatles" after="$15" img={<Icon/>} />
            <ListItem title="Ivan Petrov" subtitle="Beatles" link after="$15" img={<Icon/>} />
          </List>
        </PageContent>
      </Page>
    );
  }
}
