
### 方法调用

`Dialog` 提供了两个方法调用对话框 `alert`, `confirm`

```js static
Dialog.alert({title, text, onOk, okText})

Dialog.confirm({title, text, onOk, okText, onCancel, cancelText})

```


```js
import { Button, Dialog, Flex } from '@wonder-ui/core';

<Flex>
  <div>
    <Button 
      onClick={
        ()=> {
          Dialog.alert({ text: 'Alert 1', title: 'Dialog Menager', });
          Dialog.alert({ text: 'Alert 2', title: 'Dialog Menager', });
        }
      }
    >alert</Button>
  </div>
  <div>
    <Button 
      onClick={
        ()=> Dialog.confirm({ 
          text: 'Confirm Text', 
          title: 'Confirm Title',
          onOk: ()=> alert('ok'),
          onCancel: ()=> alert('cancel'),
        })
      }
    >confirm</Button>
  </div>
</Flex>
```
