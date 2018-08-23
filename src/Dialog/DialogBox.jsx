import React, { Component } from 'react';
import { render } from 'react-dom';
import Dialog from './Dialog';

class DialogBox extends Component {

  static element = document.createElement('div');

  state ={
    visible: false,
    mountProps: null
  }

  modalLock = false;

  modalStack = [];

  addQueue = (mountProps, callback)=>{
    if(this.modalLock){
      this.modalStack.push({mountProps, callback});
      return true;
    }
  }

  modalStackClearQueue = ()=>{
    this.modalLock = false;
    if (this.modalStack.length) {
      const {mountProps, callback} = this.modalStack.shift();
      this.mount(mountProps, callback);
    }
  }

  mount = (mountProps, callback)=>{
    if( this.addQueue( mountProps, callback ) )return true;
    this.modalLock = true;
    this.setState({ mountProps });
    setTimeout(()=>{
      this.setState({ visible: true }, callback);
    }, 0)
  }

  unmount = ()=>{
    this.setState({visible: false});
    setTimeout(()=>{
      this.setState({ mountProps: null }, this.modalStackClearQueue);
    }, 400);
  }

  render(){

    const {mountProps, visible} = this.state;

    return mountProps && (
      <Dialog {...mountProps} visible={visible}/>
    )
  }
}

export default render(<DialogBox/>, DialogBox.element);
