import { Button, Page, useDialog, useSnackbar } from '@wonder-ui/core';

export default () => {
  const dialog = useDialog();
  const toast = useSnackbar();

  return (
    <Page title="Dialog stack">
      <div style={{ padding: 16 }}>
        <Button
          variant="contained"
          onClick={() => {
            dialog.alert({ title: '标题', text: 'dialog 1' });
            dialog.alert({ title: '标题', text: 'dialog 2' });
            dialog.confirm({ title: '标题', text: '确定这么干吗?' });
            dialog.alert({
              title: '标题',
              text: 'dialog 4',
              onOk: () => {
                toast('队列结束');
              }
            });
          }}
        >
          提示框
        </Button>
      </div>
    </Page>
  );
};
