import React, {Component} from 'react'

import {Page, PageContent, ListView, Block, Bars , Form, Picker} from 'kui'

const {List, ListItem, ListGroup, ListLabel} = ListView;

const {FormLabel, FormInput} = Form;
const {ContentBlock, ContentBlockTitle} = Block;
const {SubNavBar, Navbar, Toolbar} = Bars;


const Icon = ()=>{
  return (
    <img src="https://www.99bill.com/mobsup/static/bank/bank-icon/images/bank_bcom.png" width="29" height="29" alt=""/>
  );
}

export default class FormElements extends Component {

  state = {
    openA: false,
  }

  demo1Cols = [
    {
      values: ['Apple', 'Orange', 'Bananna','Bananna','Bananna','Bananna','Bananna','Bananna','Bananna','Bananna','Bananna',]
    }
  ]

  render() {
    return (
      <Page title="picker">
        <Navbar title="picker" back/>
        <PageContent>
          <ContentBlockTitle>类型</ContentBlockTitle>
          <List>
            <ListItem>
              <FormInput type="text" placeholder="一列" readOnly onClick={(e)=>{this.setState({openA: true})}}/>
            </ListItem>
            <ListItem>
              <FormInput type="text" placeholder="两列" readOnly/>
            </ListItem>
            <ListItem>
              <FormInput type="text" placeholder="三列" readOnly/>
            </ListItem>
          </List>
        </PageContent>
        <Picker
          opened={this.state.openA}
          onOpened={()=>console.log('Picker opened')}
          toolbar={
            <Toolbar>
              <div className="left"></div>
              <div className="right"><a onClick={()=>this.setState({openA: false})}>关闭</a></div>
            </Toolbar>
          }
          cols={this.demo1Cols}
        />
      </Page>
    );
  }
}
