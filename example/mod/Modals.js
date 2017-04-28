import React, {Component} from 'react'

import {Page, PageContent, Buttons, Block, Bars, Grid, Modals} from 'kui'


const {ContentBlock, ContentBlockTitle} = Block;
const {Button} = Buttons;
const {Row,Col} = Grid;
const {SubNavBar, Navbar} = Bars;


export default class ModalsPage extends Component {

  render() {
    return (
      <Page>
        <Navbar title="Modals" back/>
        <PageContent>
          <ContentBlock>
            <Row>
              <Col width="33">
                <Button onClick={()=>Modals.alert('Alert')}>Alert</Button>
              </Col>
              <Col width="33">
                <Button onClick={()=>Modals.confirm('Confirm')}>Confirm</Button>
              </Col>
              <Col width="33">
                <Button onClick={()=>Modals.prompt('Prompt')}>Prompt</Button>
              </Col>

            </Row>
            <br/>
            <Row>
              <Col width="33">
                <Button >Popover</Button>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col width="50">
                <Button>Action Sheet</Button>
              </Col>
              <Col width="50">
                <Button>Popup</Button>
              </Col>
            </Row>

          </ContentBlock>

        </PageContent>
      </Page>
    );
  }
}
