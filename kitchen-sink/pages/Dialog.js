import React, {Component} from 'react';
import {Page, Dialog, toast} from '@wonder-ui/core';

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

  alert = ()=>{
    Dialog.alert({text: 'Alert content'});
    Dialog.alert({text: 'Alert content2'});
    Dialog.confirm({
      text: '请继续',
      okText: '好的',
      cancelText: '不好',
      onOk: ()=> {
        toast('toast', ()=>{
          Dialog.alert({text: 'Toast hide.'});
        });
      },
      onCancel: ()=>Dialog.alert({text: 'Confirm -> cancel'}),
    });
  }

  toast = ()=>{
    toast('toast');
    // Dialog.toast.success('第2个toast');
    // Dialog.toast.fail('第3个toast');
    // Dialog.toast.warning('第4个toast');
    // Dialog.toast.offline('第5个toast');
  }

  render(){
    return (
      <Page>
        <a onClick={this.alert}>alert</a>,

        <a onClick={this.toast}>toast</a>
      </Page>
    )
  }
}
