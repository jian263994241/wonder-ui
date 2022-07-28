import {
  Avatar,
  ContentBlock,
  Space,
  Typography,
  List,
  ListItem,
  ListHeader
} from '@wonder-ui/core';

const demoSrc = 'https://img01.yzcdn.cn/vant/cat.jpeg';

export default () => (
  <div>
    <ContentBlock title="基本使用">
      <Avatar src={demoSrc} />
    </ContentBlock>

    <ContentBlock title="默认图">
      <Space direction="vertical">
        <Avatar />
        <Typography color="textSecondary" variant="caption">
          无图片/加载失败, 会显示一个默认的图像
        </Typography>
      </Space>
    </ContentBlock>

    <ContentBlock title="自定义大小">
      <Space verticalAlign="start">
        <Avatar src={demoSrc} size={32} />
        <Avatar src={demoSrc} size={48} />
        <Avatar src={demoSrc} size={64} />
      </Space>
    </ContentBlock>

    <List>
      <ListHeader>配合列表使用</ListHeader>
      <ListItem
        prefix={<Avatar src={demoSrc} />}
        primary="Novalee Spicer"
        secondary="Deserunt dolor ea eaque eos"
      />
    </List>
  </div>
);
