import React, {Component} from 'react';
import {Page, PageContent, Link} from '../../src/Core';
import Tabs from '../../src/Tabs';

export default class TabsDemo extends Component {

  state={
    index: 0
  }

  render (){

    return (
      <Page>
        <PageContent>

          <a onClick={()=>this.setState({index: 0})}>tab1</a>, 
          <a onClick={()=>this.setState({index: 1})}>tab2</a>

          <Tabs index={this.state.index}>
            <div>content 1</div>
            <div>content 2</div>
          </Tabs>
        </PageContent>
      </Page>
    )
  }
}
