import React, {Component} from 'react'

import {Page, PageContent, Bars, ListView, Buttons, Tabs} from 'kui'

const {List, ListItem, ListGroup, ListLabel} = ListView;
const {ButtonsSegmented, Button} = Buttons;
const {SubNavBar, Navbar} = Bars;

export default class TabPage extends Component {
  render() {

    return (
      <Page title="标签切换" navbarFixed>
        <Navbar title="动画切换" back>
          <SubNavBar>
            <ButtonsSegmented>
              <Button tabLink>Tab 1</Button>
              <Button tabLink>Tab 2</Button>
              <Button tabLink>Tab 3</Button>
            </ButtonsSegmented>
          </SubNavBar>
        </Navbar>
        <Tabs>
          123
        </Tabs>
      </Page>
    );
  }
}
