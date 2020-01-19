
```js
import React from 'react';
import { Page, Flex, Dialog, Button, ContentBlock } from '@wonder-ui/core';

function DialogExamples(props){
  
  return (
    <Page name="Dialog" navbar>
      <ContentBlock>
        <Flex flex>
          <div>
            <Button
              fullWidth 
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
              fullWidth
              onClick={
                ()=> Dialog.confirm({ 
                  text: 'Confirm Text', 
                  title: 'Confirm Title',
                  onOk: ()=> Dialog.alert({text: 'ok'}),
                  onCancel: ()=> Dialog.alert({text: 'cancel'}),
                })
              }
            >confirm</Button>
            
          </div>
          <div>
            <Button fullWidth onClick={ ()=> Dialog.toast('toast!') } >toast</Button>
          </div>
          
        </Flex>
        
        <br/>
        <div>
          <Button 
            fullWidth
            onClick={
              ()=> Dialog.custom({
                title: 'Custom Title',
                text: 'Custom Text', 
                textAfter: <div>TextAfter string or node</div>,
                actions: [
                  { text: 'First button', primary: true, onClick: () => Dialog.alert({text: 'First'}) },
                  { text: 'Second button', onClick: () => Dialog.alert({text: 'Second'}) },
                  { text: 'Third button', onClick: () => Dialog.alert({text: 'Third'}) },
                  { text: 'Cancel' }
                ]
              })
            }
          >custom</Button>
        </div>
      </ContentBlock>
    </Page>
  )
};

<DialogExamples/>
```


### 方法调用

`Dialog` 提供了4个静态方法调用对话框 `alert`, `confirm`, `toast`, `custom`

```js static
Dialog.alert({title, text, onOk, okText})

Dialog.confirm({title, text, onOk, okText, onCancel, cancelText})

Dialog.custom({
  title: 'Custom Title',
  text: 'Custom Text', 
  textAfter: <div>TextAfter string or node</div>,
  actions: [
    { text: 'First button', primary: true, onClick: () => Dialog.alert({text: 'First'}) },
    { text: 'Second button', onClick: () => Dialog.alert({text: 'Second'}) },
    { text: 'Third button', onClick: () => Dialog.alert({text: 'Third'}) },
    { text: 'Cancel' }
  ]
})

```
