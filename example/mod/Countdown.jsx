import React, {Component} from 'react';
import {Page, PageContent, Link} from '../../src/CreateApp';
import Countdown from '../../src/Countdown';


export default class CountdownDemo extends Component {

  state = {
    visible: false,
    inputText: null
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

  select = (data)=>{

    this.setState({
      inputText: JSON.stringify(data)
    })

  }

  render(){

    return (
      <Page>
        <PageContent>
          <Countdown onStart={(done)=>done()}/>
        </PageContent>
      </Page>
    )
  }
}
