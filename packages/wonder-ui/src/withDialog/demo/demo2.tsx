/**
 * title: 提示框
 * desc: 各种信息提示框
 */

/** @jsx jsx */
import { jsx, Button, Space, withDialog } from '@wonder-ui/core';

export default withDialog(function Example(props) {
  const { dialog } = props;
  return (
    <Space wrap>
      <Button
        onClick={() =>
          dialog.alert({ title: '提示', text: '内容, 内容, 内容...' })
        }
      >
        提示框
      </Button>
      <Button onClick={() => dialog.alert({ text: '内容, 内容, 内容...' })}>
        提示框 (无标题)
      </Button>
      <Button
        onClick={() =>
          dialog.confirm({ title: '确认', text: '内容, 内容, 内容...' })
        }
      >
        确认框
      </Button>
      <Button
        onClick={() =>
          dialog.custom({
            title: '操作',
            text: '请选择一项操作',
            buttonsVertical: true,
            buttons: [
              {
                children: '标为未读',
                onClick: () => {
                  alert('标为未读');
                }
              },
              {
                children: '置顶聊天',
                onClick: () => {
                  alert('置顶聊天');
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
  );
});
