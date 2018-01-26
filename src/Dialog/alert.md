#### Examples

```js
//improt alert from 'wonder-ui/Dialog';
const Dialog = require('./index').default;
// import Button from 'wonder-ui/Button';
const Button = require('../Button').default;

function alert(){
  Dialog.alert({text: 'Alert content'});
}

;
<Button onClick={alert}>alert</Button>
```

提示框, 提供方法调用

```js static
Dialog.alert ({
  title, //{string} 对话框标题 default: ''
  text, // {string} 对话文字
  okText, // {string} 按钮文字 default : '确定'
  onOk // {func} 按钮回调
});
```
