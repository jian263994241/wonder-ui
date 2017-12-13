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
          <em>URL 控制关闭</em>
        </PageContent>
      </Page>
    )
  }
}
