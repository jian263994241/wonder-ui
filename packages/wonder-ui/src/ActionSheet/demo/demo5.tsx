import * as React from 'react';
import { useActionSheet, Button, message } from '@wonder-ui/core';

export default () => {
  const actionSheet = useActionSheet({
    actions: [
      { text: '复制', key: 'copy' },
      { text: '修改', key: 'edit' },
      { text: '删除', key: 'delete' }
    ],
    onAction: (action) => {
      message.toast(action.text);
      actionSheet.hide();
    },
    onClose: () => {
      message.toast('onClose');
      actionSheet.hide();
    }
  });

  return (
    <React.Fragment>
      <Button onClick={() => actionSheet.show()}>打开面板</Button>
      {actionSheet.rendered}
    </React.Fragment>
  );
};
