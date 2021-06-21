/**
 * title: 按钮形状
 * desc: 按钮分下面几种类型 `default`|`square`|`round`
 */
import { Button, Space } from '@wonder-ui/core';

export default () => (
  <Space>
    <Button color="primary" variant="contained">
      Default
    </Button>
    <Button color="primary" variant="contained" shape="square">
      Square
    </Button>
    <Button color="primary" variant="contained" shape="round">
      Round
    </Button>
  </Space>
);
