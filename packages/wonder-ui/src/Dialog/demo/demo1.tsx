import * as React from 'react';
import { Button, Dialog, Page, Space } from '@wonder-ui/core';

export default () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <Page title="Dialog">
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

      <Space style={{ padding: 16 }}>
        <Button variant="contained" onClick={() => setVisible(true)}>
          提示框(文字)
        </Button>

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
          <Button variant="contained">提示框(图片)</Button>
        </Dialog>
      </Space>
    </Page>
  );
};
