import { DialogContent } from '@wonder-ui/core';

export default () => (
  <div style={{ padding: 16 }}>
    <DialogContent
      style={{ width: '100%' }}
      title="标题"
      text="内容, 内容, 内容..."
      buttons={[
        {
          text: '取消',
          onClick: () => {}
        },
        {
          text: '删除',
          danger: true,
          onClick: () => {}
        }
      ]}
    />
  </div>
);
