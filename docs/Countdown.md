## &lt;Countdown/&gt;

短信60秒倒计时组件

```js
<Countdown onStart={(done)=>done()} runOnMount component="button"/>

<Countdown onStart={(done)=>done()} component={({children, ...rest})=><Btn {...rest}>{props.children}</Btn>}/>
```

参数

* `defaultText` string 默认状态文本,  默认: 发送验证码
* `text` string 发送状态文本, 默认: %s秒后重新发送
* `secondsResidue` number 倒计时, 默认60
* `component` string\| func 默认 div
* `runOnMount` bool 是否挂载时 触发start
* `onStart` func  点击触发
