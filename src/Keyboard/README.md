# 虚拟键盘


## 使用

```js
import React, {Component} from 'react';
import {Keyboard, Enpad, Numpad} from 'rc-keyboard';


<Keyboard
  visible={this.state.visible}
  dark={false}
  input="id"
  extraKey={null}
  keypad={Numpad}
  onCancel={()=>this.setState({visible: false})}
/>

```


## 参数

### Keyboard

- `input` [string] input的id
- `visible` [bool] 显示键盘
- `dark` [bool] 是否暗色主题
- `keypad` [func] 组件 Enpad/Numpad
- `onCancel` [func] 关闭键盘的时候执行
- `extraKey` [string] keypad 为 Numpad 时 定义左下角按键 默认 '00',  可以是 '00', 'x', '.' , null
- `title` [any] toolbar 中间的部分
- `closeButton` [bool] 是否显示关闭按钮
- `closeText` [string] 定义关闭按钮文字

## 预览图

![](./img/键盘.png)
