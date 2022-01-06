import { Button, Space, showSnackbar, hideSnackbar } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space>
      <Button
        onClick={() => {
          showSnackbar({
            message: '基本使用'
          });
        }}
      >
        基本使用
      </Button>
      <Button
        onClick={() => {
          showSnackbar({
            maskClickable: false,
            autoHideDuration: null,
            message: '点击按钮主动关闭',
            action: (
              <Button color="light" onClick={() => hideSnackbar()}>
                关闭
              </Button>
            )
          });
        }}
      >
        点击按钮主动关闭
      </Button>
    </Space>
  );
}
