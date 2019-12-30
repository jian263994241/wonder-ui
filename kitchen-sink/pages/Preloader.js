import React from 'react';
import { Page, Button, Preloader, ActivityIndicator, ContentBlock } from '@wonder-ui/core';

export default function PreloaderExamples() {

  const close = () => setTimeout(() => {
    Preloader.hide();
  }, 800);

  const show = ()=>{
    Preloader.show();
    close();
  }
  
  return (
    <Page name="Indicator" navbar>
      <ContentBlock header="Preloader">
        <Button onClick={show}>show preloader</Button>
      </ContentBlock>
      <ContentBlock header="ActivityIndicator">
        <ActivityIndicator text="default text"/>
        <ActivityIndicator vertical text="Vertical ActivityIndicator"/>
      </ContentBlock>
      
    </Page>
  )
}