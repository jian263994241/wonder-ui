/**
 * title: Dialog layout
 * desc:
 *
 */

/** @jsx jsx */
import { jsx, DialogContent } from '@wonder-ui/core';

export default function Example() {
  return (
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
}
