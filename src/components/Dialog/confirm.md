#### Examples

```js
//improt alert from 'wonder-ui/Dialog';
const Dialog = require('./index').default;
// import Button from 'wonder-ui/Button';
const Button = require('../Button').default;

function confirm(){
  Dialog.confirm({
    text: '请继续',
    okText: '好的',
    cancelText: '不好',
    onOk: ()=> {
      Dialog.prompt({
        title: '问题',
        text: '你的名字?',
        onOk: (val)=>Dialog.alert({text: val}),
        onCancel: ()=>Dialog.alert({text: 'Cancel'}),
      })
    },
    onCancel: ()=>Dialog.alert({text: 'Confirm -> cancel'}),
  });
}

;
<Button onClick={confirm}>confirm</Button>
```

确认框, 提供方法调用

```js static
Dialog.confirm ({
  title, //{string} 对话框标题 default: ''
  text, // {string} 对话文字
  okText, // {string} 按钮文字 default : '确定'
  onOk, // {func} 按钮回调
  cancelText, // {string} 取消按钮文字 default: '取消'
  onCancel // {func} 取消回调
});
```
