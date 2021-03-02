/**
 * title: 圆角徽章
 * desc: 设置 `rounded=true`
 */

/** @jsx jsx */
import { jsx, Badge, Space } from '@wonder-ui/core';

export default function Example() {
  return (
    <Space wrap>
      <Badge color="primary" rounded>
        primary
      </Badge>
      <Badge color="secondary" rounded>
        secondary
      </Badge>
      <Badge color="success" rounded>
        success
      </Badge>
      <Badge color="danger" rounded>
        danger
      </Badge>
      <Badge color="warning" rounded>
        warning
      </Badge>
      <Badge color="info" rounded>
        info
      </Badge>
    </Space>
  );
}
