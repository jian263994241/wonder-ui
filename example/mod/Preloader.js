import React, {Component} from 'react'

import {Page, PageContent, Buttons, Block, Bars, Grid, Modals} from 'kui'


const {ContentBlock, ContentBlockTitle} = Block;
const {Button} = Buttons;
const {Row,Col} = Grid;
const {SubNavBar, Navbar} = Bars;


export default class ModalsPage extends Component {

  showPreloader = ()=>{
    Modals.showPreloader();

    setTimeout(()=>{
      Modals.hidePreloader();
    },1000);
  }

  showIndicator = ()=>{
    Modals.showIndicator();
    setTimeout(()=>{
      Modals.hideIndicator();
    },1000);
  }

  render() {
    return (
      <Page>
        <Navbar title="Modals" back/>
        <PageContent>
          <ContentBlock>

            <Row>
              <Col width="50">
                <Button onClick={this.showPreloader}>Preloader</Button>
              </Col>
              <Col width="50">
                <Button onClick={this.showIndicator}>Indicator</Button>
              </Col>
            </Row>

          </ContentBlock>

        </PageContent>
      </Page>
    );
  }
}
