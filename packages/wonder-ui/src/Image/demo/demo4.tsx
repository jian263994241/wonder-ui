import * as React from 'react';
import { Image, Space } from '@wonder-ui/core';

const demoSrc = 'https://img01.yzcdn.cn/vant/cat.jpeg';

export default () => (
  <Space
    style={
      {
        '--image-radius': '16px',
        '--image-width': '100px',
        '--image-height': '100px'
      } as React.CSSProperties
    }
  >
    <Image src={demoSrc} />
    <Image src={demoSrc} />
    <Image src={demoSrc} />
  </Space>
);
