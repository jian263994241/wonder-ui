import { Button, useDialog } from '@wonder-ui/core';

export default () => {
  const dialog = useDialog({ title: '提示信息' });

  return (
    <div>
      <Button
        onClick={() => {
          dialog.show({
            text: '文字文字....',
            buttons: [
              {
                text: '好的',
                primary: true,
                onClick: () => {
                  dialog.hide();
                }
              }
            ]
          });
        }}
      >
        提示框
      </Button>
      <Button
        onClick={() => {
          dialog.show({
            text: '文字文字....',
            buttons: [
              {
                text: '取消',
                onClick: () => {
                  dialog.hide();
                }
              },
              {
                text: '删除',
                danger: true,
                onClick: () => {
                  dialog.hide();
                }
              }
            ]
          });
        }}
      >
        提示框2
      </Button>
      {dialog.rendered}
    </div>
  );
};
