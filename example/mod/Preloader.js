import React, {Component} from 'react'

import {Page, PageContent, Buttons, ContentBlock, ContentBlockTitle, Bars, Grid, Dialog} from 'kui'

const {Button} = Buttons;
const {Row,Col} = Grid;
const {SubNavBar, Navbar} = Bars;


export default class ModalsPage extends Component {

  state = {
    show1: false,
    show2: false
  }

  showPreloader = (i)=>()=>{
    switch (i) {
      case '1':
        Dialog.showPreloader()
        break;
      case '3':
        Dialog.showPreloader('请稍等...')
        break;
    }
  }


  render() {
    return (
      <Page>
        <Navbar title="指示器" back/>
        <PageContent>
          <ContentBlock>

            <Row>
              <Col width="50">
                <Button onClick={this.showPreloader('1')}>Preloader</Button>
              </Col>
              <Col width="50">
                <Button onClick={this.showPreloader('3')}>Preloader2</Button>
              </Col>
            </Row>

          </ContentBlock>

        </PageContent>

      </Page>
    );
  }
}
