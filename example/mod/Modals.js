import React, {Component} from 'react'

import {Page, PageContent, Buttons, ContentBlock, ContentBlockTitle, Bars, Grid, Popover, Popup, Dialog, PickerModal, ActionsModal, View, Pages, Link} from 'kui'

const {Button} = Buttons;
const {Row,Col} = Grid;
const {SubNavBar, Navbar} = Bars;

const {Toolbar} = Bars;

const {ActionLabel, ActionButton, ActionGroup} = ActionsModal;

export default class ModalsPage extends Component {

  state = {
    popupOpened: false,
    pickerModalOpened: false,
    actionsOpened: false
  }

  popup = ()=>{
    this.setState({popupOpened:true});
  }

  pickerModal = ()=>{
    this.setState({
      pickerModalOpened: true
    });
  }

  showActions = ()=>{
    this.setState({actionsOpened:true});
  }

  render() {

    const pop1 = ()=>{
      return (
        <Page>
          <Navbar title="弹窗1" backText="模态框" onBack={()=>{this.setState({popupOpened:false})}}/>
          <PageContent>
            <ContentBlock>
              POPUP1 ...
              <Link to="/pop2">pop2</Link>
            </ContentBlock>
          </PageContent>
        </Page>
      );
    }

    const pop2 = ()=>{
      return (
        <Page>
          <Navbar title="弹窗2" backText="弹窗1"/>
          <PageContent>
            <ContentBlock>
              POPUP2 ...
              <Link to="/pop3">pop3</Link>
            </ContentBlock>
          </PageContent>
        </Page>
      );
    }

    const pop3 = ()=>{
      return (
        <Page>
          <Navbar title="弹窗3" backText="弹窗2"/>
          <PageContent>
            <ContentBlock>
              POPUP3 ...
            </ContentBlock>
          </PageContent>
        </Page>
      );
    }

    return (
      <Page title="模态框">
        <Navbar title="模态框" backText/>
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
                  <ContentBlock>
                    <p>About Popover created dynamically.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac diam ac quam euismod porta vel a nunc. Quisque sodales scelerisque est, at porta justo cursus ac.</p>
                  </ContentBlock>
                </Popover>
              </Col>
              <Col width="33">
                <Popover style={{width: 200}} component={<Button>Popover 2</Button>}>
                  <ContentBlock>
                    <p>About Popover created dynamically.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac diam ac quam euismod porta vel a nunc. Quisque sodales scelerisque est, at porta justo cursus ac.</p>
                  </ContentBlock>
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
              <Col width="50">
                <Button onClick={this.pickerModal}>Picker</Button>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col width="50">
                <Button onClick={this.showActions}>Action Sheet</Button>
              </Col>
            </Row>
          </ContentBlock>

        </PageContent>

        <ActionsModal opened={this.state.actionsOpened} >
          <ActionGroup>
            <ActionLabel>这是一个标题，可以为一行或者两行。</ActionLabel>
            <ActionButton>示例菜单</ActionButton>
            <ActionButton>示例菜单</ActionButton>
          </ActionGroup>
          <ActionGroup>
            <ActionButton color="red" onClick={()=>{this.setState({actionsOpened: false})}}>取消</ActionButton>
          </ActionGroup>
        </ActionsModal>

        <PickerModal
          opened={this.state.pickerModalOpened}
          onClickOutside={()=>{this.setState({pickerModalOpened: false})}}
          toolbar={
            <Toolbar>
              <div className="left"></div>
              <div className="right"><a onClick={()=>{this.setState({pickerModalOpened: false})}}>关闭</a></div>
            </Toolbar>
          }
        >
          <ContentBlock>
            <p>About Popover created dynamically.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac diam ac quam euismod porta vel a nunc. Quisque sodales scelerisque est, at porta justo cursus ac.</p>
          </ContentBlock>
        </PickerModal>

        {/*popup*/}
        <Popup opened={this.state.popupOpened}>

          <View>
            <Pages path="/" exact component={pop1}></Pages>
            <Pages path="/pop2" component={pop2}></Pages>
            <Pages path="/pop3" component={pop3}></Pages>
          </View>
        </Popup>

      </Page>
    );
  }
}
