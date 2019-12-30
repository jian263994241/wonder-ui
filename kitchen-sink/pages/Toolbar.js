import React from 'react';
import { Page, Button, Toolbar, ContentBlock } from '@wonder-ui/core';


export default function ToolbarExamples() {
  
  return (
    <Page name="Toolbar" navbar>
      <ContentBlock header="button 2">
        <Toolbar>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </Toolbar>
      </ContentBlock>
      
      <ContentBlock header="button 3">
        <Toolbar>
          <Button>button 1</Button>
          <Button>button 2</Button>
          <Button>button 3</Button>
        </Toolbar>
      </ContentBlock>


      <ContentBlock header="buttonFull=false">
        <Toolbar buttonFull={false} gutter={1}>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </Toolbar>
      </ContentBlock>

      <Toolbar bottomFixed>
        <Button>button fixed</Button>
      </Toolbar>
    </Page>
  )
}