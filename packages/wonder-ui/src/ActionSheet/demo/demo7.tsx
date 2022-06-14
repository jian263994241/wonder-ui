import * as React from 'react';
import {
  showActionSheet,
  hideActionSheet,
  Button,
  message
} from '@wonder-ui/core';

export default () => {
  return (
    <React.Fragment>
      <Button
        onClick={() => {
          showActionSheet({
            actions: [
              { text: '复制', key: 'copy' },
              { text: '修改', key: 'edit' },
              { text: '删除', key: 'delete' }
            ],
            onAction: (action) => {
              message.toast(action.text);
              hideActionSheet();
            },
            onClose: () => {
              message.toast('onClose');
              hideActionSheet();
            }
          });
        }}
      >
        打开面板
      </Button>

      <Button
        onClick={() => {
          showActionSheet({
            actions: [
              { text: '复制2', key: 'copy' },
              { text: '修改2', key: 'edit' }
            ],
            onAction: (action) => {
              message.toast(action.text);
              hideActionSheet();
            },
            onClose: () => {
              message.toast('onClose');
              hideActionSheet();
            }
          });
        }}
      >
        打开面板2
      </Button>
    </React.Fragment>
  );
};
