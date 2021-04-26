/**
 * title: 垂直按钮
 * desc: 设置 `buttonsVertical` 按钮排列方向
 */

/** @jsx jsx */
import { jsx, Button, Dialog } from '@wonder-ui/core';

export default function Example() {
  return (
    <Dialog
      buttonsVertical
      buttons={[
        {
          text: '标为未读',
          onClick: () => {
            alert('标为未读');
          }
        },
        {
          text: '置顶聊天',
          onClick: () => {
            alert('置顶聊天');
          }
        }
      ]}
    >
      <Button>垂直按钮</Button>
    </Dialog>
  );
}
