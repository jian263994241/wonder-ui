import { Button, Space } from '@wonder-ui/core';

export default () => (
  <Space>
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
