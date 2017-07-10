import React, {Component} from 'react'

import {Page, PageContent, Buttons, ContentBlock, ContentBlockTitle, Bars, Grid, Preloader} from 'kui'

const {Button} = Buttons;
const {Row,Col} = Grid;
const {SubNavBar, Navbar} = Bars;


export default class ModalsPage extends Component {

  state = {
    visibleType: null
  }

  showPreloader = (i)=>()=>{
    this.setState({
      visibleType: i
    });

    setTimeout(()=>{
      this.setState({
        visibleType: null
      });
    }, 1000);
  }


  render() {
    return (
      <Page>
        <Navbar title="指示器" backText/>
        <PageContent>
          <ContentBlock>
            <ContentBlockTitle>Preloader</ContentBlockTitle>
            <Row>
              <Col width="33">
                <Button onClick={this.showPreloader(1)}>默认</Button>
              </Col>
              <Col width="33">
                <Button onClick={this.showPreloader(2)}>有文字</Button>
              </Col>
              <Col width="33">
                <Button onClick={this.showPreloader(3)}>logo</Button>
              </Col>
            </Row>
          </ContentBlock>
          <Preloader visible={this.state.visibleType === 1}></Preloader>
          <Preloader visible={this.state.visibleType === 2} text="问题提示"></Preloader>
          <Preloader visible={this.state.visibleType === 3} logoType="kq"></Preloader>
        </PageContent>

      </Page>
    );
  }
}
