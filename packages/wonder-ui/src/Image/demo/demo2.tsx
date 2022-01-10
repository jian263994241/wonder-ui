import { Image, Space } from '@wonder-ui/core';

const demoSrc =
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60';

export default () => (
  <Space>
    <Image src={demoSrc} width={100} height={100} fit="fill" />
    <Image src={demoSrc} width={100} height={100} fit="contain" />
    <Image src={demoSrc} width={100} height={100} fit="cover" />
    <Image src={demoSrc} width={100} height={100} fit="scale-down" />
    <Image src={demoSrc} width={100} height={100} fit="none" />
  </Space>
);
