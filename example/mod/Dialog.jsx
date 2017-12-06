import React, {Component} from 'react';
import {Page, PageContent, Link} from '../../src/Minimal';
import Alert from '../../src/Dialog/Alert';

export default class DialogDemo extends Component {

  state = {
    visible: false,
    text: 'Alert content'
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
    console.log(this.state);
    return (
      <Page>
        <PageContent>
          <Alert buttons={[{text:'ok', onClick:()=>this.setState({text: 'ok'})}]} text={this.state.text}></Alert>
        </PageContent>
      </Page>
    )
  }
}
