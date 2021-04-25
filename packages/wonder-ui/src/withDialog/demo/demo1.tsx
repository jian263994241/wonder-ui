/**
 * title: 提示栈
 * desc:
 */

/** @jsx jsx */
import { jsx, Button, withDialog } from '@wonder-ui/core';

export default withDialog(function Example(props) {
  const { dialog } = props;

  return (
    <div>
      <Button
        onClick={() => {
          dialog.alert({ title: '标题', text: 'dialog 1' });
          dialog.alert({ title: '标题', text: 'dialog 2' });
          dialog.confirm({ title: '标题', text: '确定这么干吗?' });
          dialog.alert({ title: '标题', text: 'dialog 4' });
        }}
      >
        提示框
      </Button>
    </div>
  );
});
