import React, {Component} from 'react'

import {Page, PageContent, Block, Bars, Grid} from 'kui'

const {ContentBlock, ContentBlockTitle} = Block;
const {Row, Col} = Grid;
const {SubNavBar, Navbar} = Bars;

export default class GridPage extends Component {

  render() {
    return (
      <Page title="栅格">
        <Navbar title="栅格" back/>
        <PageContent>
          <ContentBlock>
            <p>Flex栅格布局</p>
          </ContentBlock>
          <div className="ks-grid">
            <ContentBlockTitle>有间距布局</ContentBlockTitle>
            <ContentBlock>
              <Row>
                <Col width="50">col-50</Col>
                <Col width="50">col-50</Col>
              </Row>
              <Row>
                <Col width="25">col-25</Col>
                <Col width="25">col-25</Col>
                <Col width="25">col-25</Col>
                <Col width="25">col-25</Col>
              </Row>
              <Row>
                <Col width="33">col-33</Col>
                <Col width="33">col-33</Col>
                <Col width="33">col-33</Col>
              </Row>
              <Row>
                <Col width="20">col-20</Col>
                <Col width="20">col-20</Col>
                <Col width="20">col-20</Col>
                <Col width="20">col-20</Col>
                <Col width="20">col-20</Col>
              </Row>
              <Row>
                <Col width="33">col-33</Col>
                <Col width="66">col-66</Col>
              </Row>
              <Row>
                <Col width="25">col-25</Col>
                <Col width="25">col-25</Col>
                <Col width="50">col-50</Col>
              </Row>
              <Row>
                <Col width="75">col-75</Col>
                <Col width="25">col-25</Col>
              </Row>
              <Row>
                <Col width="80">col-80</Col>
                <Col width="20">col-20</Col>
              </Row>
            </ContentBlock>
            <ContentBlockTitle>无间距布局</ContentBlockTitle>
              <ContentBlock>
                <Row noGutter>
                  <Col width="50">col-50</Col>
                  <Col width="50">col-50</Col>
                </Row>
                <Row noGutter>
                  <Col width="25">col-25</Col>
                  <Col width="25">col-25</Col>
                  <Col width="25">col-25</Col>
                  <Col width="25">col-25</Col>
                </Row>
                <Row noGutter>
                  <Col width="33">col-33</Col>
                  <Col width="33">col-33</Col>
                  <Col width="33">col-33</Col>
                </Row>
                <Row noGutter>
                  <Col width="20">col-20</Col>
                  <Col width="20">col-20</Col>
                  <Col width="20">col-20</Col>
                  <Col width="20">col-20</Col>
                  <Col width="20">col-20</Col>
                </Row>
                <Row noGutter>
                  <Col width="33">col-33</Col>
                  <Col width="66">col-66</Col>
                </Row>
                <Row noGutter>
                  <Col width="25">col-25</Col>
                  <Col width="25">col-25</Col>
                  <Col width="50">col-50</Col>
                </Row>
                <Row noGutter>
                  <Col width="75">col-75</Col>
                  <Col width="25">col-25</Col>
                </Row>
                <Row noGutter>
                  <Col width="80">col-80</Col>
                  <Col width="20">col-20</Col>
                </Row>
              </ContentBlock>
              <ContentBlockTitle>叠加布局</ContentBlockTitle>
              <ContentBlock>
                <Row>
                  <Col width="50">
                    col-50
                    <Row>
                      <Col width="50">col-50</Col>
                      <Col width="50">col-50</Col>
                    </Row>
                  </Col>
                  <Col width="50">
                    col-50
                    <Row>
                      <Col width="25">col-25</Col>
                      <Col width="75">col-75</Col>
                    </Row>
                  </Col>
                </Row>
              </ContentBlock>
          </div>
        </PageContent>
      </Page>
    );
  }
}
