import React, {Component} from 'react'

import {Page, PageContent, Bars, ListView, Buttons} from 'kui'

const {List, ListItem, ListGroup, ListLabel} = ListView;
const {ButtonsSegmented, Button} = Buttons;
const {SubNavBar, Navbar} = Bars;

export default class TabPage extends Component {
  render() {

    const Tab = ()=>{

      return (
        <ButtonsSegmented>
          <Button tabLink>Tab 1</Button>
          <Button>Tab 1</Button>
          <Button>Tab 1</Button>
        </ButtonsSegmented>
      );
    }

    return (
      <Page title="标签切换" navbarFixed>
        <Navbar title="经典切换" back/>
        <PageContent>

        </PageContent>
      </Page>
    );
  }
}
