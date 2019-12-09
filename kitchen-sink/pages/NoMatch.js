import React from 'react';
import { Page, Empty } from '@wonder-ui/core';

export default function NoMatch(props) {

  return (
    <Page name="没有找到" navbar>
      <Empty
        description="没有找到"
      />
    </Page>
  )
}