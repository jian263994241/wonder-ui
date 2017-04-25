import React, {Component} from 'react'

import {Page, PageContent, Bars, ListView, Buttons, Tabs, SwipeableViews} from 'kui'

const {List, ListItem, ListGroup, ListLabel} = ListView;
const {ButtonsSegmented, Button} = Buttons;
const {SubNavBar, Navbar} = Bars;

const styles = {
  slide: {
    padding: 15,
    minHeight: '100%',
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

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

        <PageContent withSubnavbar>
            123123
        </PageContent>

      </Page>
    );
  }
}
