import React from 'react';
import { Page, Flex, Dialog, Button, ContentBlock } from '@wonder-ui/core';

export default function DialogExamples(props){
  
  return (
    <Page name="Dialog" navbar>
      <ContentBlock header="Default">
        <Flex>
          <Button
              onClick={
                ()=> {
                  Dialog.alert({ text: 'Queue.1', title: 'Title', });
                  Dialog.alert({ text: 'Queue.2', title: 'Title', });
                }
              }
            >alert</Button>
            <Button 
              onClick={
                ()=> Dialog.confirm({ 
                  text: 'Confirm Text', 
                  title: 'Title',
                  onOk: ()=> Dialog.alert({text: 'ok', title: 'Callback'}),
                  onCancel: ()=> Dialog.alert({text: 'cancel', title: 'Callback'}),
                })
              }
            >confirm</Button>
            <Button 
              onClick={
                ()=> Dialog.confirm({ 
                  text: 'Tap hold', 
                  title: 'Title',
                  onOk: ()=> new Promise(resolve => {
                    Dialog.toast('Tap hold', 2000)
                  }),
                })
              }
            >Tap hold</Button>
          </Flex>
      </ContentBlock>
      <ContentBlock header="Custom">
        <Flex>
          <Button 
            onClick={
              ()=> Dialog.custom({
                title: 'Custom Title',
                text: 'Custom Text', 
                content: <div>TextAfter node</div>,
                actions: [
                  { text: 'First button', primary: true, onClick: () => Dialog.alert({text: 'First'}) },
                  { text: 'Second button', onClick: () => Dialog.alert({text: 'Second'}) },
                  { text: 'Third button', onClick: () => Dialog.alert({text: 'Third'}) },
                  { text: 'Cancel' }
                ]
              })
            }
          >multi-button</Button>

          <Button 
            onClick={
              ()=> Dialog.custom({
                actions: [
                  { text: 'First button', primary: true, onClick: () => Dialog.alert({text: 'First'}) },
                  { text: 'Second button', onClick: () => Dialog.alert({text: 'Second'}) },
                  { text: 'Third button', onClick: () => Dialog.alert({text: 'Third'}) },
                  { text: 'Cancel' }
                ]
              })
            }
          >actions</Button>

          <Button 
            onClick={
              ()=> Dialog.custom({
                title: 'Agreement',
                text: (
                  <p style={{textAlign: 'left'}}>
                    text, text, text, text, text, text, text, text, text, text, text, 
                    text, text, text, text, text,text, text, text, text, text,text, text, text, text, text,
                    text, text, text, text, text,text, text, text, text, text,text, text, text, text, text,
                  </p>
                ),
                content: ({ ref })=>{
                  return (
                    <p>
                      <label>
                        <input type="checkbox" ref={ref}/>
                        I agree to this agreement 
                      </label>
                    </p>
                  )
                },
                actions: [
                  { 
                    text: 'Cancel',
                  },
                  { 
                    text: 'Agree', 
                    primary: true,
                    onClick: (e, {contentRef}) => new Promise(resolve=>{
                      if(contentRef.current.checked){
                        resolve()
                      }else{
                        Dialog.toast('Please check the checkbox.')
                      }
                    })
                  },
                ]
              })
            }
          >content</Button>
        </Flex>
      </ContentBlock>
    </Page>
  )
};