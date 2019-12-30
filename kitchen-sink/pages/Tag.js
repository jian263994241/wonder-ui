import React from 'react';
import { Page, Button, CheckableTag, ContentBlock, Tag } from '@wonder-ui/core';

export default function TagExamples() {

  return (
    <Page name="Tag" navbar>

      <ContentBlock header="Tag">
        <Tag color="primary">primary</Tag>
        <Tag color="secondary">secondary</Tag>
        <Tag color="#5576F0">#5576F0</Tag>
      </ContentBlock>

      <ContentBlock header="CheckableTag">  
        <CheckableTag checked>CheckableTag</CheckableTag>
        <CheckableTag>CheckableTag</CheckableTag>
      </ContentBlock>

    </Page>
  )
}