
### 基本

```js
import { Dialog } from '@wonder-ui/core';

const exampleStyle = {
  position: 'relative', 
  height: 200
};

<div className="example" style={exampleStyle}>
  <Dialog 
    containerId="dialog-example-alert"
    visible={true}
    fixed={false}
    title="基本"
    text="这是一个基础的弹框"
    actions={[
      {
        text: '确定',
        primary: true,
        onClick: ()=> alert('确定')
      }
    ]}
  />
  <div id="dialog-example-alert"></div>
</div>

```

### 警告框

```js
import { Dialog } from '@wonder-ui/core';

const exampleStyle = {
  position: 'relative', 
  height: 200
};

<div className="example" style={exampleStyle}>
  <Dialog 
    containerId="dialog-example-confirm"
    visible={true}
    fixed={false}
    title="警告"
    text="这是一个警告弹框"
    actions={[
      {
        text: '取消',
        onClick: ()=> alert('取消')
      },
      {
        text: '确定',
        primary: true,
        onClick: ()=> alert('确定')
      }
    ]}
  />
  <div id="dialog-example-confirm"></div>
</div>

```

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
        ()=> Dialog.alert({ 
          text: 'Alert Text', 
          title: 'Alert Title',
          onOk: ()=> alert('ok')
        })
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
