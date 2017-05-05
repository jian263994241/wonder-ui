import React, {Component} from 'react'

import {Page, PageContent, Bars, ListView} from 'kui'

const {List, ListItem, ListGroup, ListLabel} = ListView;

const {SubNavBar, Navbar} = Bars;

export default class TabPage extends Component {
  render() {
    return (
      <Page title="标签切换">
        <Navbar title="标签切换" back/>
        <PageContent>
          <List>
            <ListItem title="经典切换" link to="/Tab-Static"/>
            <ListItem title="动画切换" link to="/Tab-Animation"/>
          </List>
        </PageContent>
      </Page>
    );
  }
}
