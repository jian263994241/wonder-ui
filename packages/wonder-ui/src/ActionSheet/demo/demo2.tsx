import * as React from 'react';
import { ActionSheet, Button, message } from '@wonder-ui/core';

const actions = [
  { text: '复制', key: 'copy' },
  { text: '修改', key: 'edit' },
  { text: '删除', key: 'delete' }
];

export default () => (
  <ActionSheet
    actions={actions}
    onAction={(action) => {
      message.toast(action.text);
      console.log(action);
    }}
  >
    <Button>打开面板</Button>
  </ActionSheet>
);
