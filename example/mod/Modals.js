import React, {Component} from 'react'

import {Page, PageContent, Buttons, Block, Bars, Grid, Modals, Popover, Popup} from 'kui'


const {ContentBlock, ContentBlockTitle} = Block;
const {Button} = Buttons;
const {Row,Col} = Grid;
const {SubNavBar, Navbar} = Bars;

export default class ModalsPage extends Component {

  state = {
    openPopupOpened: false
  }

  _popup = ()=>{
    this.setState({openPopupOpened:true});
  }

  render() {
    return (
      <Page>
        <Navbar title="Modals" back/>
        <PageContent>
          <ContentBlock>
            <Row>
              <Col width="33">
                <Button onClick={()=>{Modals.alert('Hello Word!')}}>Alert</Button>
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
                <Popover style={{width: 200}} component={<Button>Popover 1</Button>}>
                  <div className="content-block">
                    <p>About Popover created dynamically.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac diam ac quam euismod porta vel a nunc. Quisque sodales scelerisque est, at porta justo cursus ac.</p>
                  </div>
                </Popover>
              </Col>
              <Col width="33">
                <Popover style={{width: 200}} component={<Button>Popover 2</Button>}>
                  <div className="content-block">
                    <p>About Popover created dynamically.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac diam ac quam euismod porta vel a nunc. Quisque sodales scelerisque est, at porta justo cursus ac.</p>
                  </div>
                </Popover>
              </Col>
              <Col width="33">
                <Popover style={{width: 200}} component={<Button>Popover 3</Button>}>
                  <div className="content-block">
                    <p>About Popover created dynamically.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac diam ac quam euismod porta vel a nunc. Quisque sodales scelerisque est, at porta justo cursus ac.</p>
                  </div>
                </Popover>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col width="50">
                <Button onClick={this._popup}>Popup</Button>
              </Col>
            </Row>

          </ContentBlock>

        </PageContent>

        {/*popup*/}
        <Popup opened={this.state.openPopupOpened}>
          <Page>
            <Navbar title="POPUP" back onBack={()=>{this.setState({openPopupOpened:false})}}/>
            <PageContent>
              <ContentBlock>
                POPUP...
              </ContentBlock>
            </PageContent>
          </Page>
        </Popup>

      </Page>
    );
  }
}
