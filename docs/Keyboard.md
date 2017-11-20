# &lt;Keyboard/&gt;

## 使用

### 安全键盘样式

英文

```js

import React, {Component} from 'react';
import Keyboard from 'wonder-ui/Keyboard/Keyboard'
import Enpad from 'wonder-ui/Keyboard/Enpad'
import Logo from 'wonder-ui/Keyboard/Logo'

<Keyboard
  visible={this.state.visible}
  dark
  input="id"
  extraKey={null}
  keypad={Enpad}
  title={<Logo/>}
  onCancel={()=>this.setState({visible: false})}
/>
```

数字

```js
import React, {Component} from 'react';
import Keyboard from 'wonder-ui/Keyboard/Keyboard'
import Numpad from 'wonder-ui/Keyboard/Numpad'
import Logo from 'wonder-ui/Keyboard/Logo'

<Keyboard
  visible={this.state.visible}
  dark
  input="id"
  extraKey={null}
  keypad={Numpad}
  title={<Logo/>}
  onCancel={()=>this.setState({visible: false})}
/>
```

### 数字键盘

```js
import React, {Component} from 'react';
import Keyboard from 'wonder-ui/Keyboard/Keyboard'
import Numpad from 'wonder-ui/Keyboard/Numpad'
import Logo from 'wonder-ui/Keyboard/Logo'

//有小数点
<Keyboard
  visible={this.state.visible}
  dark
  input="id"
  extraKey={'.'}
  keypad={Numpad}
  onCancel={()=>this.setState({visible: false})}
/>

//无小数点
<Keyboard
  visible={this.state.visible}
  dark
  input="id"
  extraKey={null}
  keypad={Numpad}
  onCancel={()=>this.setState({visible: false})}
/>

//身份证
<Keyboard
  visible={this.state.visible}
  dark
  input="id"
  extraKey={'X'}
  keypad={Numpad}
  onCancel={()=>this.setState({visible: false})}
/>
```

## 参数

### Keyboard

* `input` \[string\] input的id

* `visible` \[bool\] 显示键盘

* `dark` \[bool\] 是否暗色主题

* `keypad`\[func\] 组件 Enpad/Numpad

* `onCancel`\[func\] 关闭键盘的时候执行

* `extraKey`\[string\] keypad 为 Numpad 时 定义左下角按键 默认 '00',  可以是 '00', 'x', '.' , null

* `title` \[any\] toolbar 中间的部分

* `closeButton`\[bool\] 是否显示关闭按钮

* `closeText` \[string\] 定义关闭按钮文字
