import React, {Component} from 'react';
import {Page, Link} from '@wonder-ui/core';
import Dialog from '@wonder-ui/components/Dialog';

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
        Dialog.prompt({
          title: '问题',
          text: '你的名字?',
          onOk: (val)=>Dialog.alert({text: val}),
          onCancel: ()=>Dialog.alert({text: 'Cancel'}),
        })
      },
      onCancel: ()=>Dialog.alert({text: 'Confirm -> cancel'}),
    });
  }

  toast = ()=>{
    Dialog.toast('toast');
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
