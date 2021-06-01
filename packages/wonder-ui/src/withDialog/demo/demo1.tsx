/**
 * title: 提示栈
 * desc: withDialog 提供 `alert`, `confirm`, `toast` 等静态方法
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
          dialog.alert({ title: '标题', text: 'dialog 1' });
          dialog.alert({ title: '标题', text: 'dialog 2' });
          dialog.confirm({ title: '标题', text: '确定这么干吗?' });
          dialog.alert({ title: '标题', text: 'dialog 4' });
          dialog.toast('队列结束');
        }}
      >
        提示框
      </Button>
    </div>
  );
});
