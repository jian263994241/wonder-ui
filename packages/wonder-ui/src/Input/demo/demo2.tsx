import * as React from 'react';
import {
  Button,
  ContentBlock,
  Input,
  InputAction,
  Space,
  WhiteSpace
} from '@wonder-ui/core';

export default () => {
  const actionRef = React.useRef<InputAction>();

  return (
    <ContentBlock title="聚焦">
      <Input
        actionRef={actionRef}
        placeholder="请输入"
        defaultValue="聚焦额外配置属性"
      />

      <WhiteSpace />
      <Space>
        <Button
          size="small"
          onClick={() => {
            actionRef.current?.focus({ cursor: 'start' });
          }}
        >
          first
        </Button>
        <Button
          size="small"
          onClick={() => {
            actionRef.current?.focus({ cursor: 'end' });
          }}
        >
          last
        </Button>
        <Button
          size="small"
          onClick={() => {
            actionRef.current?.focus({ cursor: 'all' });
          }}
        >
          select all
        </Button>
        <Button
          size="small"
          onClick={() => {
            actionRef.current?.focus({ preventScroll: true });
          }}
        >
          prevent scroll
        </Button>
      </Space>
    </ContentBlock>
  );
};
