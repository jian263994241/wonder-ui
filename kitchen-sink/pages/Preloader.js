import React from 'react';
import { Page, Button, Preloader, ActivityIndicator, ContentBlock, CircularProgress, Indicator } from '@wonder-ui/core';

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

      <ContentBlock header="Indicator">
        <Indicator/>
        <br/>
        <Indicator spin size="small"/>
        <Indicator spin size="default"/>
        <Indicator spin size="large"/>
      </ContentBlock>

      <ContentBlock header="CircularProgress">
        <CircularProgress variant="indeterminate" />     
      </ContentBlock>
    </Page>
  )
}