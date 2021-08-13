import { Button, Page, Space, useDialog } from '@wonder-ui/core';

export default () => {
  const dialog = useDialog();

  return (
    <Page title="Dialog">
      <Space style={{ padding: 16 }}>
        <Button
          variant="contained"
          onClick={() => {
            dialog.alert({ title: '提示', text: '内容, 内容, 内容...' });
          }}
        >
          提示框
        </Button>
        <Button
          variant="contained"
          onClick={() => dialog.alert({ text: '内容, 内容, 内容...' })}
        >
          提示框 (无标题)
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            dialog.confirm({ title: '确认', text: '内容, 内容, 内容...' })
          }
        >
          确认框
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            dialog.custom({
              title: '操作',
              text: '请选择一项操作',
              buttonsVertical: true,
              buttons: [
                {
                  children: '标为未读',
                  onClick: () => {
                    console.log('标为未读');
                  }
                },
                {
                  children: '置顶聊天',
                  onClick: () => {
                    console.log('置顶聊天');
                  }
                },
                {
                  children: '取消',
                  onClick: () => {}
                }
              ]
            })
          }
        >
          操作框
        </Button>
      </Space>
    </Page>
  );
};
