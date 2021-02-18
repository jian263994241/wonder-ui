/**
 * title: 按钮标签
 * desc: 按钮标签面几种类型 `a` | `button` | `input`
 */
/** @jsx jsx */
import { Button, jsx, Space } from '@wonder-ui/core';

export default function ButtonTags() {
  return (
    <Space wrap>
      <Button component="a" href="#" target="_blank">
        Link
      </Button>
      <Button>Button</Button>
      <Button component="input" type="button" value="Input"></Button>
      <Button component="input" type="submit" value="Submit"></Button>
      <Button component="input" type="reset" value="Reset"></Button>
    </Space>
  );
}
