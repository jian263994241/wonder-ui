import React, {createElement, Component} from 'react';
import {Link, Page, PageContent, Route} from '~/src/Core';
import Popup from '~/src/Popup';

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
           <Popup
            visible={this.state.visible}
            title="Popup Demo"
            extraRight={<a onClick={this.close}>关闭</a>}
          >
            Popup content...
           </Popup>
         </PageContent>
       </Page>
     )
   }
 }
