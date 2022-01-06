import * as React from 'react';
import { Button, Dialog, Space } from '@wonder-ui/core';

export default () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div>
      <Button onClick={() => setVisible(true)}>显式调用</Button>
      <Dialog
        visible={visible}
        title="标题"
        text="内容, 内容, 内容..."
        buttons={[
          {
            text: '取消',
            onClick: () => {
              setVisible(false);
            }
          },
          {
            text: '好的',
            primary: true,
            onClick: () => {
              setVisible(false);
            }
          }
        ]}
      />

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
            text: '知道啦!',
            primary: true
          }
        ]}
      >
        <Button>按钮触发</Button>
      </Dialog>
    </div>
  );
};
