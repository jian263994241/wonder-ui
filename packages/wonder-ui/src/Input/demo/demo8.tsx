/**
 * title: 聚焦
 * desc: 聚焦额外配置属性。
 */
import * as React from 'react';
import { Button, Input, InputAction, Space } from '@wonder-ui/core';

export default () => {
  const actionRef = React.useRef<InputAction>();

  return (
    <Space direction="vertical">
      <Space>
        <Button
          variant="outlined"
          onClick={() => {
            actionRef.current?.focus({ cursor: 'start' });
          }}
        >
          Focus at first
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            actionRef.current?.focus({ cursor: 'end' });
          }}
        >
          Focus at last
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            actionRef.current?.focus({ cursor: 'all' });
          }}
        >
          Focus to select all
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            actionRef.current?.focus({ preventScroll: true });
          }}
        >
          Focus prevent scroll
        </Button>
      </Space>
      <Input
        actionRef={actionRef}
        placeholder="请输入"
        defaultValue="聚焦额外配置属性"
      />
    </Space>
  );
};
