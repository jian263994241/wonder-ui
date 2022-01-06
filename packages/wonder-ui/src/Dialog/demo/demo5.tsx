import { Button, showDialog, hideDialog } from '@wonder-ui/core';

export default () => (
  <Button
    onClick={() => {
      showDialog({
        text: '文字文字....',
        buttons: [
          {
            text: '好的',
            primary: true,
            onClick: () => {
              hideDialog();
            }
          }
        ]
      });
    }}
  >
    提示框
  </Button>
);
