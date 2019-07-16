import React, {Component} from 'react';
import {Page, Link} from '@wonder-ui/core';
import Tabs from '@wonder-ui/components/Tabs';

export default class TabsDemo extends Component {

  state={
    index: 0
  }

  render (){

    return (
      <Page>
        <a onClick={()=>this.setState({index: 0})}>tab1</a>,
        <a onClick={()=>this.setState({index: 1})}>tab2</a>

        <Tabs index={this.state.index}>
          <div>content 1</div>
          <div>content 2</div>
        </Tabs>
      </Page>
    )
  }
}
