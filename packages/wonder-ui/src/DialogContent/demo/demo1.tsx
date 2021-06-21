/**
 * title: Dialog layout
 * desc:
 *
 */
import { DialogContent } from '@wonder-ui/core';

export default () => (
  <DialogContent
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
);
