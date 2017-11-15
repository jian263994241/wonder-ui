import React, {Component} from 'react';
import {render} from 'react-dom';
import Citys from '../../src/Citys';

export default class Example extends Component {

  render(){

    const inputStyle={
      width: '100%',
      height: '44px',
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
        <input type="text" placeholder="请选择" style={inputStyle} readOnly/>

        <Citys></Citys>
      </div>
    )
  }
}


render(
  <Example/>,
  document.getElementById('root')
)
