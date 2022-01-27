import { Image, Space } from '@wonder-ui/core';

const demoSrc = 'https://img01.yzcdn.cn/vant/cat.jpeg';

export default () => (
  <Space style={{ padding: 16 }}>
    <Image src={demoSrc} width={64} height={64} fit="cover" radius={8} />
    <Image src={demoSrc} width={64} height={64} fit="cover" radius={'1rem'} />
    <Image src={demoSrc} width={64} height={64} fit="cover" round />
  </Space>
);
