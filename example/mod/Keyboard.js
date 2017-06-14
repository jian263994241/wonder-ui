import React, {Component} from 'react'

import {Page, PageContent, ContentBlock, Bars, Grid, Form, ListView, ContentBlockTitle, Keyboard} from 'kui'

const {FormLabel, FormInput} = Form;
const {List, ListItem, ListGroup, ListLabel} = ListView;

const {Row, Col} = Grid;
const {SubNavBar, Navbar} = Bars;

export default class KeyboardPage extends Component {

  state = {
    inputValA: '',
    keyboardOpen: false
  }

  render() {
    return (
      <Page title="键盘">
        <Navbar title="键盘" backText></Navbar>
        <PageContent>

          <List>
            <ListItem>
              <FormLabel>安全键盘</FormLabel>
              <FormInput type="text" placeholder="数字输入" value={this.state.inputValA} onFocus={()=>{
                this.setState({
                  keyboardOpen:true
                });
              }}/>
            </ListItem>
            <ListItem>
              <FormLabel>数字键盘</FormLabel>
              <FormInput type="text" placeholder="数字输入"/>
            </ListItem>
          </List>
          <Keyboard.Input value={'123a'} />
        </PageContent>

        <Keyboard opened={this.state.keyboardOpen} logo closeBtn onKeyDown={(num)=>{
          let inputValA = this.state.inputValA

          if(num === 'del'){
            inputValA = inputValA.slice(0, inputValA.length - 1);
          }else{
            inputValA = inputValA + num
          }
          this.setState({
            inputValA: inputValA
          })

        }}></Keyboard>
      </Page>
    );
  }
}
