/**
 * title: 自定义
 */

/** @jsx jsx */
import { jsx, Empty, Button } from '@wonder-ui/core';

export default function Example() {
  return (
    <Empty
      image={
        <img
          width="150"
          src="https://img01.yzcdn.cn/vant/empty-image-search.png"
        />
      }
      description="自定义描述"
    >
      <Button variant="contained">自定义按钮</Button>
    </Empty>
  );
}
