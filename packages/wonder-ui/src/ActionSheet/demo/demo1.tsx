import * as React from 'react';
import { ActionSheet, Button, message } from '@wonder-ui/core';

const actions = [
  { text: '复制', key: 'copy' },
  { text: '修改', key: 'edit' },
  { text: '删除', key: 'delete' }
];

export default () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <React.Fragment>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        打开面板
      </Button>
      <ActionSheet
        divider
        visible={visible}
        actions={actions}
        onAction={(action) => {
          message.toast(action.text);
          setVisible(false);
        }}
        onClose={() => {
          setVisible(false);
        }}
      />
    </React.Fragment>
  );
};
