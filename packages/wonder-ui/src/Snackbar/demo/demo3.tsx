import { Button, Space, useSnackbar } from '@wonder-ui/core';

export default function Example() {
  const snackbar = useSnackbar();

  return (
    <div>
      <Space>
        <Button
          onClick={() => {
            snackbar.show({
              message: '2秒后自动关闭',
              autoHideDuration: 2000,
              maskClickable: false
            });
          }}
        >
          自动关闭 1
        </Button>
        <Button
          onClick={() => {
            snackbar.show({
              message: '3秒自动, 点击背景提前关闭',
              maskClickable: true,
              autoHideDuration: 3000
            });
          }}
        >
          自动关闭 2
        </Button>
        <Button
          onClick={() => {
            snackbar.show({
              maskClickable: false,
              message: '点击按钮主动关闭',
              action: (
                <Button color="light" onClick={() => snackbar.hide()}>
                  关闭
                </Button>
              )
            });
          }}
        >
          点击按钮主动关闭
        </Button>
        <Button
          onClick={() => {
            snackbar.show({
              message: '点击背景关闭',
              maskClickable: true,
              autoHideDuration: null
            });
          }}
        >
          点击背景关闭
        </Button>
      </Space>
      {snackbar.rendered}
    </div>
  );
}
