/**
 * title: 块状按钮
 * desc: 通过辅助样式实现块状按钮
 */
/** @jsx jsx */
import { jsx, Button, WhiteSpace } from '@wonder-ui/core';

export default function Example() {
  return (
    <div>
      <Button variant="contained" fullWidth>
        Block button
      </Button>
      <WhiteSpace size="small" />
      <Button variant="contained" fullWidth>
        Block button
      </Button>
    </div>
  );
}
