import React from 'react';
import { Page, Button, ToolBar, ContentBlock } from '@wonder-ui/core';


export default function ToolBarExamples() {
  
  return (
    <Page name="ToolBar" navbar>
      <ContentBlock header="button 2">
        <ToolBar>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </ToolBar>
      </ContentBlock>
      
      <ContentBlock header="button 3">
        <ToolBar>
          <Button>button 1</Button>
          <Button>button 2</Button>
          <Button>button 3</Button>
        </ToolBar>
      </ContentBlock>


      <ContentBlock header="buttonFull=false">
        <ToolBar buttonFull={false} gutter={1}>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </ToolBar>
      </ContentBlock>

      <ToolBar bottomFixed>
        <Button>button fixed</Button>
      </ToolBar>
    </Page>
  )
}