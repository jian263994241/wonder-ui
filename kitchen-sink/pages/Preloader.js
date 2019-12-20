import React from 'react';
import { Page, Block, Button, Preloader } from '@wonder-ui/core';

export default function PreloaderExamples() {

  const close = () => setTimeout(() => {
    Preloader.hide();
  }, 400);

  const show = ()=>{
    Preloader.show();
    close();
  }
  
  return (
    <Page name="Preloader" navbar>
      <Block blank={1} space={1}>
        <Button onClick={show}>show preloader</Button>
      </Block>
    </Page>
  )
}