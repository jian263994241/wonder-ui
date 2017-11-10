import React, {Component} from 'react';
import {render} from 'react-dom';
import {Keyboard, Enpad, Numpad} from '../../src/Keyboard';

const style = {
  padding: '10px 0'
}

class Example extends Component {

  state = {
    numpad: null
  }

  padHandler = (filed, status) => () =>{
    this.state[filed] = status;
    this.forceUpdate();
  }

  componentDidMount() {

  }

  state = {
    dark: false,
    keyboardid: ''
  }

  switchTheme = ()=>{
    this.setState({
      dark: !this.state.dark
    });
  }

  render() {
    return (
      <div>

        <div style={{paddingBottom: '10px'}}>
          <a onClick={this.switchTheme} style={{padding: '8px', border:'1px solid red'}}>切换主题</a>
        </div>

        <input
          type="text"
          id="numInput"
          placeholder="numpad"
          style={{border: '1px solid #000'}}
          onClick={()=>this.setState({keyboardid: 'a'})}/>

        <br/>
        <input
          type="text"
          id="numInput3"
          placeholder="numpad2"
          style={{border: '1px solid #000'}}
          onClick={()=>this.setState({keyboardid: 'b'})}/>

        <Keyboard
          visible={this.state.keyboardid === 'a'}
          dark={this.state.dark}
          input="numInput"
          keypad={Enpad}
          onCancel={()=>this.setState({keyboardid: ''})}
        />

        <Keyboard
          visible={this.state.keyboardid === 'b'}
          dark={this.state.dark}
          input="numInput3"
          extraKey={null}
          keypad={Numpad}
          onCancel={()=>this.setState({keyboardid: ''})}
        />
      </div>
    );
  }
}


render(
  <Example/>,
  document.getElementById('root')
)
