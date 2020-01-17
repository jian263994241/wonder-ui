
```jsx
import React from 'react';
import { Page, Button, ToolBar, ContentBlock } from '@wonder-ui/core';

function ToolBarExamples() {
  
  return (
    <Page name="ToolBar" navbar>
      <ContentBlock header="button full">
        <ToolBar>
          <Button full>button 1</Button>
          <Button full>button 2</Button>
        </ToolBar>
      </ContentBlock>
      
      <ContentBlock header="button 3">
        <ToolBar>
          <Button>button 1</Button>
          <Button>button 2</Button>
          <Button>button 3</Button>
        </ToolBar>
      </ContentBlock>


      <ContentBlock header="gutter">
        <ToolBar gutter={1}>
          <Button>button 1</Button>
          <Button>button 2</Button>
        </ToolBar>
      </ContentBlock>

      <ToolBar bottomFixed>
        <Button full>button fixed</Button>
      </ToolBar>
    </Page>
  )
};

<ToolBarExamples/>
```