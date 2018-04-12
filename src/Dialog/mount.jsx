import React, {Component, createElement, cloneElement} from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import Dialog from './Dialog';

const element = document.createElement('div');
const modalStack = [];

let modalLock = false;

function modalStackClearQueue () {
  modalLock = false;
  if (modalStack.length) {
      (modalStack.shift())();
  }
};

function addQueue(fn){
  if(modalLock){
    modalStack.push(fn);
    return true;
  }
};

class Wrapper extends Component {

  constructor(props){
    super(props);

    this.state = {
      visible: props.defaultVisible
    }
  }

  hide = ()=>this.setState({visible: false});

  show = ()=>this.setState({visible: true});

  render(){
    const {
      defaultVisible,
      ...dialogProps
    } = this.props;
    return <Dialog {...dialogProps} visible={this.state.visible}/>
  }
}

export default function mount (props, callback) {

  if( addQueue( mount.bind(this, props, callback) ) ) return true;
  modalLock = true;

  mount.rc = render( (
    <Wrapper
      {...props}
      defaultVisible={true}
      didLeave={()=> {
        unmountComponentAtNode(element);
        modalStackClearQueue()
      }}
    />
  ), element, callback );

}

function unmount () {
  mount.rc.hide();
}

export {unmount};
