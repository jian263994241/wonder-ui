/**
 * title: Toast
 * desc: Snackbar 实现的 Toast
 */
import { Button, withDialog } from '@wonder-ui/core';

export default withDialog((props) => {
  const { dialog } = props;

  return (
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
  );
});
