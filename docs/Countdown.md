
## Countdown

短信60秒倒计时按钮

### 基本使用

```jsx
const Countdown = require('../src/Countdown').default;
const Button = require('../src/Button').default;

<Countdown onStart={(done)=>done()}/>
```


### 更多参数

```jsx
const Countdown = require('../src/Countdown').default;
const Button = require('../src/Button').default;

<Countdown
  secondsResidue={60},
  defaultText={'获取验证码'},
  defaultText2={'重新发送'},
  text={'%s秒'}
  onStart={(done)=>done()}
  render={({content, ...props})=> <button {...props}>{content}</button>}
/>

```
