import React, {Component} from 'react'

import {Page, PageContent, Buttons, Block, Bars, Grid, Modals, Popover} from 'kui'


const {ContentBlock, ContentBlockTitle} = Block;
const {Button} = Buttons;
const {Row,Col} = Grid;
const {SubNavBar, Navbar} = Bars;

export default class ModalsPage extends Component {


  _openPopover = (clickLink)=>()=>{
    Modals.popover(
      (
        <Popover style={{width: 200}}>
          <div className="content-block">
            <p>About Popover created dynamically.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac diam ac quam euismod porta vel a nunc. Quisque sodales scelerisque est, at porta justo cursus ac.</p>
          </div>
        </Popover>
      ),
      this.refs[clickLink].refs.Button
    )
  }

  _popup = ()=>{
    Modals.popup(
      (
        <div className="popup">
          <Page>
            <Navbar title="POPUP" left={<a className="close-popup">关闭</a>}/>
            <PageContent>
              <ContentBlock>
                POPUP...
              </ContentBlock>
            </PageContent>
          </Page>
        </div>    
      )
    )
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
                <Button ref="poppver1" onClick={this._openPopover('poppver1')}>Popover 1</Button>
              </Col>
              <Col width="33">
                <Button ref="poppver2" onClick={this._openPopover('poppver2')}>Popover 2</Button>
              </Col>
              <Col width="33">
                <Button ref="poppver3" onClick={this._openPopover('poppver3')}>Popover 3</Button>
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

      </Page>
    );
  }
}
