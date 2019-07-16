#### Examples

```js
//improt alert from 'wonder-ui/Dialog';
const Dialog = require('./index').default;
// import Button from 'wonder-ui/Button';
const Button = require('../Button').default;

function toast(){
  Dialog.toast('第1个toast');
  Dialog.toast.success('第2个toast');
  Dialog.toast.fail('第3个toast');
  Dialog.toast.warning('第4个toast');
  Dialog.toast.offline('第5个toast');
}

;
<Button onClick={toast}>toast</Button>
```

轻提示, 提供方法调用

```js static
Dialog.toast ({
  text, // {string} 对话文字
  callback // {func} 消失时回调
});
```
