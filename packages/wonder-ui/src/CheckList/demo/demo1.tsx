import { CheckList, CheckListItem, ContentBlock } from '@wonder-ui/core';
import React from 'react';

export default () => (
  <div
    style={
      {
        '--wui-content-block-padding-vertical': '0px',
        '--wui-content-block-padding-horizontal': '0px'
      } as React.CSSProperties
    }
  >
    <ContentBlock title="基本使用">
      <CheckList defaultValue={['B']}>
        <CheckListItem value="A">A</CheckListItem>
        <CheckListItem value="B">B</CheckListItem>
        <CheckListItem value="C">C</CheckListItem>
      </CheckList>
    </ContentBlock>
  </div>
);
