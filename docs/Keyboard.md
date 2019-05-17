## Keyboard

常用键盘样式

### 使用场景

**英文** 安全键盘样式

```js

// import React, {Component} from 'react';
// import Keyboard from 'wonder-ui/Keyboard/Keyboard'
// import Enpad from 'wonder-ui/Keyboard/Enpad'
// import Logo from 'wonder-ui/Keyboard/Logo'

const Keyboard = require('../src/Keyboard/Keyboard').default;
const Enpad = require('../src/Keyboard/Enpad').default;
const Logo = require('../src/Keyboard/Logo').default;
const style = {
  width: 375
}
;
<div style={style}>
  <Keyboard
    visible
    inline
    dark
    input="id"
    extraKey={null}
    keypad={Enpad}
    title={<Logo/>}
    onCancel={()=>this.setState({visible: false})}
  />
</div>
```

**数字** 安全键盘样式

```js
// import React, {Component} from 'react';
// import Keyboard from 'wonder-ui/Keyboard/Keyboard'
// import Numpad from 'wonder-ui/Keyboard/Numpad'
// import Logo from 'wonder-ui/Keyboard/Logo'

const Keyboard = require('../src/Keyboard/Keyboard').default;
const Numpad = require('../src/Keyboard/Numpad').default;
const Logo = require('../src/Keyboard/Logo').default;
const KeyboardInput = require('../src/Keyboard/Input').default;
const Button = require('../src/Button').default;
const style = {
  width: 375
}

class Demo extends React.Component{
  render(){
    return (
      <div style={style}>

        <KeyboardInput
          id="input-grid"
          onChange={(value)=>{
            console.log(value);
          }}
        />

        <br/>

        <Keyboard
          inline
          dark
          closeButton={false}
          maxLength={6}
          input="input-grid"
          extraKey={null}
          keypad={Numpad}
          title={<Logo/>}
          ref="kb"
        />

        <br/>

        <Button fill onClick={()=>{this.refs.kb.reset()}}>reset</Button>
      </div>
    )
  }
}

;<Demo/>
```

数字键盘

```js
// import React, {Component} from 'react';
// import Keyboard from 'wonder-ui/Keyboard/Keyboard'
// import Numpad from 'wonder-ui/Keyboard/Numpad'
// import Logo from 'wonder-ui/Keyboard/Logo'
//
const Keyboard = require('../src/Keyboard/Keyboard').default;
const Numpad = require('../src/Keyboard/Numpad').default;
const Logo = require('../src/Keyboard/Logo').default;
const style = {
  width: 375
}
;
<div style={style}>
  //有小数点
  <Keyboard
    visible
    inline
    input="id"
    extraKey={'.'}
    keypad={Numpad}
  />

  //无小数点
  <Keyboard
    visible
    inline
    input="id"
    extraKey={null}
    keypad={Numpad}
  />

  //身份证
  <Keyboard
    visible
    inline
    input="id"
    extraKey={'X'}
    keypad={Numpad}
  />
</div>


```
