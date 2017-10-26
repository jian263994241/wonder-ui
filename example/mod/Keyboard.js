import React, {Component} from 'react'

import {Page, PageContent, ContentBlock, Bars, Grid, Form, ListView, ContentBlockTitle, Keyboard} from 'kui'

const {FormLabel, FormInput} = Form;
const {List, ListItem, ListGroup, ListLabel} = ListView;

const {Row, Col} = Grid;
const {SubNavBar, Navbar} = Bars;

export default class KeyboardPage extends Component {

  state = {
    inputValA: '',
    inputValB: '',
    inputValC: '',
    keyboardOpen: false,
    keyboardOpenB: false
  }


  render() {
    return (
      <Page title="键盘">
        <Navbar title="键盘" backText></Navbar>
        <PageContent>

          <List>
            <ListItem>
              <FormLabel>安全键盘</FormLabel>
            <FormInput type="text" placeholder="数字输入" value={this.state.inputValA} ref="inputA" onFocus={()=>{
                this.setState({
                  keyboardOpen:true
                });
              }}/>
            </ListItem>
            <ListItem>
              <FormLabel>数字键盘</FormLabel>
            <FormInput type="text" placeholder="数字输入" value={this.state.inputValB} ref="inputB" onFocus={()=>{
                this.setState({
                  keyboardOpenB:true
                });
              }}/>
            </ListItem>
          </List>
          <Keyboard.Input
            show
            value={this.state.inputValC}
            onClick={()=>{
              this.setState({
                keyboardOpenC:true
              });
            }}
          />
         <br/>
          <Keyboard
            inline
            random
            value={this.state.inputValC}
            maxLength={6}
            onChange={(num)=>{
              this.setState({
                inputValC: num
              })
            }}
            onCancel={()=>{
              this.setState({
                keyboardOpenC:false
              });
            }}
          ></Keyboard>
        </PageContent>

        <Keyboard
          visible={this.state.keyboardOpen}
          value={this.state.inputValA}
          onChange={(num)=>{

            this.setState({
              inputValA: num
            })
          }}
          onCancel={()=>{
            this.setState({
              keyboardOpen:false
            });
          }}
          getCancelIgnore={()=>{
            return this.refs.inputA.getElement();
          }}
        ></Keyboard>

        <Keyboard
          visible={this.state.keyboardOpenB}
          value={this.state.inputValB}
          number
          dot
          onChange={(num)=>{

            this.setState({
              inputValB: num
            })
          }}
          onCancel={()=>{
            this.setState({
              keyboardOpenB:false
            });
          }}
          getCancelIgnore={()=>{
            return this.refs.inputB.getElement();
          }}
        ></Keyboard>
      </Page>
    );
  }
}
