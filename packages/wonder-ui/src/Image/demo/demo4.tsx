import * as React from 'react';
import { Image, Space } from '@wonder-ui/core';

const demoSrc =
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60';

export default () => (
  <Space
    style={
      {
        '--image-radius': '16px',
        '--image-width': '150px',
        '--image-height': '150px'
      } as React.CSSProperties
    }
  >
    <Image src={demoSrc} />
    <Image src={demoSrc} />
    <Image src={demoSrc} />
  </Space>
);
