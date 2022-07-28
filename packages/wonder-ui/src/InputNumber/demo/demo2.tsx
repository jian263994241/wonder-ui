import * as React from 'react';
import {
  Button,
  ContentBlock,
  InputNumber,
  InputNumberAction,
  Space,
  IconButton
} from '@wonder-ui/core';
import { DashCircle, PlusCircle } from '@wonder-ui/icons';

export default () => {
  const actionRef = React.useRef<InputNumberAction>(null);
  return (
    <ContentBlock title="进步器">
      <Space>
        <IconButton
          onClick={() => {
            actionRef.current?.onInternalStep(false);
          }}
        >
          <DashCircle />
        </IconButton>
        <InputNumber
          actionRef={actionRef}
          placeholder="Basic"
          defaultValue={1}
          min={1}
          max={10}
          disableStepHandler
          style={{ textAlign: 'center', width: 80 }}
        />
        <IconButton
          onClick={() => {
            actionRef.current?.onInternalStep(true);
          }}
        >
          <PlusCircle />
        </IconButton>
      </Space>
    </ContentBlock>
  );
};
