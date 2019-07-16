import React, {createElement, Component} from 'react';
import {Link, Page} from '@wonder-ui/core';
import Popup from '@wonder-ui/components/Popup';

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
         <a onClick={this.open}>打开</a>
           <Popup
            visible={this.state.visible}
            title="Popup Demo"
            extraRight={<a onClick={this.close}>关闭</a>}
          >
            Popup content...
           </Popup>
       </Page>
     )
   }
 }
