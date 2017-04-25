import React, {Component} from 'react'

import {Page, PageContent, Buttons, Block, Navbar, Grid} from 'kui'


const {ContentBlock, ContentBlockTitle} = Block;
const {Button} = Buttons;
const {Row,Col} = Grid;

export default class ButtonsPage extends Component {
  render() {
    return (
      <Page title="按钮" navbarFixed>
        <Navbar title="按钮" back/>
        <PageContent>
          <ContentBlock>
            <Button>按钮</Button>
            <br/>
            <Button disabled>不可点击</Button>
            <br/>
            <Row>
              <Col width="auto">
                <Button big fill={false}>相对次要按钮</Button>
              </Col>
              <Col width="auto">
                <Button big>相对重要按钮</Button>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col width="auto">
                <Button big fill={false} disabled>相对次要按钮</Button>
              </Col>
              <Col width="auto">
                <Button big disabled>相对重要按钮</Button>
              </Col>
            </Row>
          </ContentBlock>

          <ContentBlock inner noHairlines>
            <Button big>置底按钮</Button>
          </ContentBlock>

          <ContentBlock inner noHairlines>
            <Row>
              <Col width="auto">
                <Button big fill={false}>相对次要按钮</Button>
              </Col>
              <Col width="auto">
                <Button big>相对重要按钮</Button>
              </Col>
            </Row>
          </ContentBlock>

          <ContentBlock inner noHairlines>
            <Row>
              <Col width="auto">
                <Button big fill={false} disabled>相对次要按钮</Button>
              </Col>
              <Col width="auto">
                <Button big disabled>相对重要按钮</Button>
              </Col>
            </Row>
          </ContentBlock>

        </PageContent>
      </Page>
    );
  }
}
