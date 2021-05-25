/**
 * title: 按钮标签
 * desc: 按钮标签面几种类型 `a` | `button` | `input`
 */
/** @jsx jsx */
import { jsx, Space, Button } from '@wonder-ui/core';

export default function ButtonTags() {
  return (
    <Space wrap>
      <Button variant="contained" href="#/components/button" target="_blank">
        Link
      </Button>
      <Button
        variant="contained"
        component="input"
        type="button"
        value="Input"
      ></Button>
      <Button
        variant="contained"
        component="input"
        type="submit"
        value="Submit"
      ></Button>
      <Button
        variant="contained"
        component="input"
        type="reset"
        value="Reset"
      ></Button>
    </Space>
  );
}
