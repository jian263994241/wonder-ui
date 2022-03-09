import { Image, Space } from '@wonder-ui/core';
import React from 'react';

const demoSrc = 'https://img01.yzcdn.cn/vant/cat.jpeg';

export default () => (
  <Space style={{ padding: 16 }}>
    <Image
      src={demoSrc}
      width={64}
      height={64}
      variant="rounded"
      style={
        {
          '--image-radius': '2px'
        } as React.CSSProperties
      }
    />
    <Image
      src={demoSrc}
      width={64}
      height={64}
      variant="rounded"
      style={
        {
          '--image-radius': '4px'
        } as React.CSSProperties
      }
    />
    <Image
      src={demoSrc}
      width={64}
      height={64}
      variant="rounded"
      style={
        {
          '--image-radius': '8px'
        } as React.CSSProperties
      }
    />
  </Space>
);
