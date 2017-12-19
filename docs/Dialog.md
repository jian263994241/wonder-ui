# Dialog

对话框

```js
import Dialog from 'wonder-ui/Dialog';

// 弹框
Dialog.alert({text: 'Alert content'});
Dialog.alert({text: 'Alert content2'});
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

// 轻提示
Dialog.toast('第1个toast');
Dialog.toast.success('第2个toast');
Dialog.toast.fail('第3个toast');
Dialog.toast.warning('第4个toast');
Dialog.toast.offline('第5个toast');

```

## Props

### alert ({...})

- title `string` 对话框标题 default: ''
- text `string`  对话文字
- okText `string` 按钮文字 default : '确定'
- onOk `func` 按钮回调

### confirm ({...}), prompt ({...})

- title `string` 对话框标题 default: ''
- text `string`  对话文字
- okText `string` 按钮文字  default : '确定'
- onOk `func` 按钮回调
- cancelText `string` 取消按钮文字 default: '取消'
- onCancel `func` 取消回调

### toast(text, callback)

- text `string`  对话文字
- callback 关闭回调

带Icon的 Toast `success, fail, warning, offline`
