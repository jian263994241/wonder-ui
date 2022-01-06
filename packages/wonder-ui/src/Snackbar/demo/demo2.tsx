import * as React from 'react';
import { Button, Snackbar, SnackbarProps, Space } from '@wonder-ui/core';

export default function Example() {
  const [state, setState] = React.useState<Partial<SnackbarProps>>({
    visible: false,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  });

  const { anchorOrigin = {}, visible } = state;

  const handleClick = (newState: any) => () => {
    setState({ visible: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, visible: false });
  };

  return (
    <div>
      <Space>
        <Button
          onClick={handleClick({
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'left'
            }
          })}
        >
          左上
        </Button>
        <Button
          onClick={handleClick({
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'center'
            }
          })}
        >
          中上
        </Button>
        <Button
          onClick={handleClick({
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            }
          })}
        >
          右上
        </Button>
        <Button
          onClick={handleClick({
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'right'
            }
          })}
        >
          右下
        </Button>
        <Button
          onClick={handleClick({
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'center'
            }
          })}
        >
          中下
        </Button>
        <Button
          onClick={handleClick({
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left'
            }
          })}
        >
          左下
        </Button>
        <Button
          onClick={handleClick({
            anchorOrigin: {
              vertical: 'center',
              horizontal: 'center'
            }
          })}
        >
          中
        </Button>
      </Space>

      <Snackbar
        visible={visible}
        message="简单的消息条"
        autoHideDuration={2000}
        anchorOrigin={anchorOrigin}
        onClose={handleClose}
        key={anchorOrigin.vertical + anchorOrigin.horizontal!}
      />
    </div>
  );
}
