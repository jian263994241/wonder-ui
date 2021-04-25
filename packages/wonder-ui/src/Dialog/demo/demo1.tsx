/**
 * title: 基础使用
 * desc: 使用 buttons 定义按钮
 */

/** @jsx jsx */
import { jsx, Button, Dialog, Space } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space>
      <Dialog
        title="标题"
        text="内容, 内容, 内容..."
        buttons={[
          {
            children: '取消'
          },
          {
            children: '好的',
            primary: true
          }
        ]}
      >
        <Button>提示框(文字)</Button>
      </Dialog>
      <Dialog
        title="标题"
        content={
          <div>
            <img
              src="https://img.99bill.com/z/img/new-pos.png"
              width={260}
              height={260}
              alt="img"
            />
          </div>
        }
        buttons={[
          {
            children: '知道啦!',
            primary: true
          }
        ]}
      >
        <Button>提示框(图片)</Button>
      </Dialog>
    </Space>
  );
}
