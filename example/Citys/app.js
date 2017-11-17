import React, {Component} from 'react';
import {render} from 'react-dom';
import Citys from '../../src/Citys';

export default class Example extends Component {

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

    const inputStyle={
      width: '100%',
      border: '1px solid #ccc',
      padding: '10px',
      boxSizing: 'border-box'
    }

    const style = {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: '100%',
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch',
    }

    return (
      <div style={style}>
        <div style={inputStyle} onClick={this.open}>{this.state.inputText? this.state.inputText : '请选择'}</div>


        <Citys
          visible={this.state.visible}
          onCancel={this.close}
          onSelect={this.select}
        />
      </div>
    )
  }
}


render(
  <Example/>,
  document.getElementById('root')
)
