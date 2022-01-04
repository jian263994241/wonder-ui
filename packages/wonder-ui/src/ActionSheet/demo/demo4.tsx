import * as React from 'react';
import {
  ActionSheet,
  ActionSheetAction,
  Button,
  message
} from '@wonder-ui/core';

const actions: ActionSheetAction[] = [
  { text: '复制', key: 'copy', disabled: true },
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
      if (action.key === 'delete') {
        return new Promise((resolve, reject) => {
          message.confirm({
            title: '提示',
            text: action.description,
            onCancel: () => {
              reject();
            },
            onOk: () => {
              message.toast('删除');
              resolve({});
            }
          });
        });
      }
    }}
  >
    <Button>禁用和事件处理</Button>
  </ActionSheet>
);
