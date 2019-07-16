import React, {Component} from 'react';
import {Page, Link} from '@wonder-ui/core';
import Countdown from '@wonder-ui/components/Countdown';

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
        <Countdown onStart={(done)=>done()}/>
      </Page>
    )
  }
}
