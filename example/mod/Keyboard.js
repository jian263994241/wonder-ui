import React, {Component} from 'react';
import {Page, PageContent, Link} from '../../src/CreateApp';
import {Keyboard, Enpad, Numpad} from '../../src/Keyboard';
import Logo from '../../src/Keyboard/Logo';

const style = {
  padding: '10px 0'
}

export default class KeyboardDemo extends Component {

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
      <Page>
        <PageContent>
          <h2>安全键盘</h2>
          <ul>
            <li>
              <input
                type="text"
                id="numInput"
                placeholder="安全键盘 - 英文"
                style={{border: '1px solid #000'}}
                onClick={()=>this.setState({keyboardid: 'a'})}/>
              <Keyboard
                visible={this.state.keyboardid === 'a'}
                dark
                input="numInput"
                keypad={Enpad}
                title={<Logo/>}
                closeButton={false}
                onCancel={()=>this.setState({keyboardid: ''})}
              />
            </li>
            <li>
              <input
                type="text"
                id="numInput3"
                placeholder="安全键盘 - 数字"
                style={{border: '1px solid #000'}}
                onClick={()=>this.setState({keyboardid: 'b'})}/>
              <Keyboard
                visible={this.state.keyboardid === 'b'}
                dark
                input="numInput3"
                extraKey={null}
                keypad={Numpad}
                title={<Logo/>}
                onCancel={()=>this.setState({keyboardid: ''})}
              />
            </li>
          </ul>

          <h2>
            数字键盘
          </h2>


          <Keyboard
            visible
            inline
            extraKey={null}
            keypad={Numpad}
          />

          <br/>

          <Keyboard
            visible
            inline
            extraKey={'.'}
            keypad={Numpad}
          />

          <br/>

          <Keyboard
            visible
            inline
            extraKey={'00'}
            keypad={Numpad}
          />

          <br/>

          <Keyboard
            visible
            inline
            extraKey={'x'}
            keypad={Numpad}
          />
        </PageContent>
      </Page>
    );
  }
}
