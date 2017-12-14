import React, {Component} from 'react';
import {Page, PageContent, Link} from '../../src/CreateApp';
import Popup from '../../src/Popup';

export default class PopupDemo extends Component {

  state = {
    visible: false
  }

  open = ()=>{
    this.setState({
      visible: true
    })
  }

  close = ()=>{
    this.setState({
      visible: false
    })
  }

  render(){

    return (
      <Page>
        <PageContent>
          <h1>PopRoute</h1>
          <p>回退关闭</p>
        </PageContent>
      </Page>
    )
  }
}
