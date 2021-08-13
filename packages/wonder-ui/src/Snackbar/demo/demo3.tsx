import { Button, Space, useSnackbar } from '@wonder-ui/core';

export default function Example() {
  const snackbar = useSnackbar();

  return (
    <Space>
      <Button variant="contained" onClick={() => snackbar('简单的消息条')}>
        简单的消息条
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          snackbar('简单的消息条 - 1');
          snackbar('简单的消息条 - 2');
          snackbar('简单的消息条 - 3');
        }}
      >
        消息栈
      </Button>
    </Space>
  );
}
