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
          <a onClick={this.open}>打开</a>
          <Popup visible={this.state.visible}>
            <a onClick={this.close}>关闭</a>
          </Popup>
        </PageContent>
      </Page>
    )
  }
}
