import * as React from 'react';
import {
  Avatar,
  ContentBlock,
  Space,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListHeader
} from '@wonder-ui/core';

const demoSrc = 'https://img01.yzcdn.cn/vant/cat.jpeg';

export default () => (
  <div>
    <ContentBlock title="基本使用">
      <Avatar src={demoSrc} />
    </ContentBlock>

    <ContentBlock title="默认图">
      <Avatar />

      <Typography color="textSecondary">
        无图片/加载失败, 会显示一个默认的图像
      </Typography>
    </ContentBlock>

    <ContentBlock title="自定义大小">
      <Space verticalAlign="start">
        <Avatar
          src={demoSrc}
          style={{ '--avatar-size': '32px' } as React.CSSProperties}
        />
        <Avatar
          src={demoSrc}
          style={{ '--avatar-size': '48px' } as React.CSSProperties}
        />
        <Avatar
          src={demoSrc}
          style={{ '--avatar-size': '64px' } as React.CSSProperties}
        />
      </Space>
    </ContentBlock>

    <List>
      <ListHeader>配合列表使用</ListHeader>
      <ListItem media={<Avatar src={demoSrc} />}>
        <ListItemText secondary="Deserunt dolor ea eaque eos">
          Novalee Spicer
        </ListItemText>
      </ListItem>
    </List>
  </div>
);
