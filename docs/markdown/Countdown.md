


### 基本使用

```jsx
import Countdown from '@wonder-ui/components/Countdown';
import Button from '@wonder-ui/components/Button';

<Countdown onStart={(done)=>done()}/>
```


### 更多参数

```jsx
import Countdown from '@wonder-ui/components/Countdown';
import Button from '@wonder-ui/components/Button';

<Countdown
  secondsResidue={60}
  defaultText={'获取验证码'}
  defaultText2={'重新发送'}
  text={'%s秒'}
  onStart={(done)=>done()}
  render={({content, ...props})=> <button {...props}>{content}</button>}
/>

```
