/**
 * title: Dialog layout
 * desc:
 *
 */
import { Page, Space, DialogContent, WhiteSpace } from '@wonder-ui/core';

export default () => (
  <Page title="Dialog content">
    <WhiteSpace />
    <Space horizontalAlign="center">
      <DialogContent
        style={{ width: 220 }}
        title="标题"
        text="内容, 内容, 内容..."
        buttons={[
          {
            text: '取消',
            onClick: () => {}
          },
          {
            text: '好的',
            primary: true,
            onClick: () => {}
          }
        ]}
      />
    </Space>
  </Page>
);
