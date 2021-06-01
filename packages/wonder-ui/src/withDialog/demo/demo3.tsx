/**
 * title: Toast
 * desc: Snackbar 实现的 Toast
 */

/** @jsx jsx */
import { jsx, Button, withDialog } from '@wonder-ui/core';

export default withDialog(function Example(props) {
  const { dialog } = props;

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          dialog.toast('一条通知信息');
          dialog.toast('一条通知信息.');
          dialog.toast('一条通知信息..');
          dialog.toast('一条通知信息...');
        }}
      >
        toast
      </Button>
    </div>
  );
});
