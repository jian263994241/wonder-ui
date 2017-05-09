import React, {Component} from 'react'

import {Page, PageContent, Buttons, Block, Bars, Grid, Preloader} from 'kui'


const {ContentBlock, ContentBlockTitle} = Block;
const {Button} = Buttons;
const {Row,Col} = Grid;
const {SubNavBar, Navbar} = Bars;


export default class ModalsPage extends Component {

  state = {
    show1: false,
    show2: false
  }

  showPreloader = (i)=>()=>{
    this.state['show'+ i] = true
    this.forceUpdate();
    setTimeout(()=>{
      this.state['show'+ i] = false;
      this.forceUpdate();
    }, 2000);
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
                <Button onClick={this.showPreloader('2')}>Preloader2</Button>
              </Col>

            </Row>

          </ContentBlock>

        </PageContent>
        <Preloader show={this.state.show1}></Preloader>
        <Preloader show={this.state.show2} base></Preloader>
      </Page>
    );
  }
}
