import { Button, message } from '@wonder-ui/core';

message.setup({
  toastOption: {
    autoHideDuration: 1000,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }
});

export default () => (
  <Button
    onClick={() => {
      message.toast('修改配置');
    }}
  >
    消息提示
  </Button>
);
