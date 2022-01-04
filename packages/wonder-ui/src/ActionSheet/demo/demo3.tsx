import * as React from 'react';
import { ActionSheet, Button, message } from '@wonder-ui/core';

const actions = [
  { text: '复制', key: 'copy' },
  { text: '修改', key: 'edit' },
  {
    text: '删除',
    key: 'delete',
    danger: true,
    description: '删除后数据不可恢复'
  }
];

export default () => (
  <ActionSheet
    title="请选择你要进行的操作"
    cancelText="取消"
    actions={actions}
    onAction={(action) => {
      message.toast(action.text);
      console.log(action);
    }}
  >
    <Button>取消按钮和额外描述</Button>
  </ActionSheet>
);
