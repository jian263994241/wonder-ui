import { Image, Space } from '@wonder-ui/core';

const demoSrc =
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60';

export default () => (
  <Space style={{ padding: 16 }}>
    <Image src={demoSrc} width={64} height={64} fit="cover" radius={4} />
    <Image src={demoSrc} width={64} height={64} fit="cover" radius={8} />
    <Image src={demoSrc} width={64} height={64} fit="cover" radius={'1rem'} />
    <Image src={demoSrc} width={64} height={64} fit="cover" radius="50%" />
  </Space>
);
