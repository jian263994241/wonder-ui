import React, {Component} from 'react'

import {Page, PageContent, Bars, ListView} from 'kui'

const {List, ListItem, ListGroup, ListLabel} = ListView;

const {SubNavBar, Navbar} = Bars;

export default class TabPage extends Component {
  render() {
    return (
      <Page title="标签切换">
        <Navbar title="标签切换" backText/>
        <PageContent>
          <List>
            <ListItem title="经典切换" link="/Tab/Static"/>
            <ListItem title="动画切换" link="/Tab/Animation"/>
          </List>
        </PageContent>
      </Page>
    );
  }
}
