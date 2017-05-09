import React, {Component} from 'react'

import {Page, PageContent, Buttons, Block, Bars, Grid, Modals, Popover, Popup, Dialog} from 'kui'


const {ContentBlock, ContentBlockTitle} = Block;
const {Button} = Buttons;
const {Row,Col} = Grid;
const {SubNavBar, Navbar} = Bars;


export default class ModalsPage extends Component {

  state = {
    openPopupOpened: false
  }

  popup = ()=>{
    this.setState({openPopupOpened:true});
  }

  render() {
    return (
      <Page title="模态框">
        <Navbar title="Modals" back/>
        <PageContent>
          <ContentBlock>
            <Row>
              <Col width="33">
                <Button onClick={()=>Dialog.alert('Hello Word!', ()=>console.log('alert'))}>Alert</Button>
              </Col>
              <Col width="33">
                <Button onClick={()=>Dialog.confirm('Confirm', ()=>console.log('Confirm: 确定'), ()=>console.log('Confirm: 取消'))}>Confirm</Button>
              </Col>
              <Col width="33">
                <Button onClick={()=>Dialog.prompt('Prompt', (val)=>console.log('Prompt: 确定', val), ()=>console.log('Prompt: 取消'))}>Prompt</Button>
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
                <Button onClick={()=>Dialog.toast('Toast')}>Toast</Button>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col width="50">
                <Button onClick={this.popup}>Popup</Button>
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
