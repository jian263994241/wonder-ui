/**
 * title: 消息条的位置
 * desc: 通过指定 `anchorOrigin` 的属性，您可以控制消息条的位置
 */

/** @jsx jsx */
import * as React from 'react';
import { jsx, Button, Snackbar, SnackbarProps, Space } from '@wonder-ui/core';

export default function Example() {
  const [state, setState] = React.useState<Partial<SnackbarProps>>({
    visible: false,
    vertical: 'top',
    horizontal: 'center'
  });

  const { vertical, horizontal, visible } = state;

  const handleClick = (newState: any) => () => {
    setState({ visible: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, visible: false });
  };

  return (
    <div>
      <Space wrap>
        <Button
          onClick={handleClick({
            vertical: 'top',
            horizontal: 'left'
          })}
        >
          左上
        </Button>
        <Button
          onClick={handleClick({
            vertical: 'top',
            horizontal: 'center'
          })}
        >
          中上
        </Button>
        <Button
          onClick={handleClick({
            vertical: 'top',
            horizontal: 'right'
          })}
        >
          右上
        </Button>
        <Button
          onClick={handleClick({
            vertical: 'bottom',
            horizontal: 'right'
          })}
        >
          右下
        </Button>
        <Button
          onClick={handleClick({
            vertical: 'bottom',
            horizontal: 'center'
          })}
        >
          中下
        </Button>
        <Button
          onClick={handleClick({
            vertical: 'bottom',
            horizontal: 'left'
          })}
        >
          左下
        </Button>
        <Button
          onClick={handleClick({
            vertical: 'center',
            horizontal: 'center'
          })}
        >
          中
        </Button>
      </Space>

      <Snackbar
        visible={visible}
        message="简单的消息条"
        autoHideDuration={3000}
        anchorOrigin={{ vertical, horizontal }}
        onClose={handleClose}
        key={vertical + horizontal}
      />
    </div>
  );
}
