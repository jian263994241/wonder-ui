import {
  ArrowForward,
  Space,
  Button,
  Card,
  Divider,
  WhiteSpace,
  message
} from '@wonder-ui/core';
import { GlobalStyles } from '@wonder-ui/styled';

const onClick = () => {
  message.toast('点击了卡片');
};

const onHeaderClick = () => {
  message.toast('点击了卡片Header区域');
};

const onBodyClick = () => {
  message.toast('点击了卡片Body区域');
};

export default () => (
  <Space direction="vertical" gap={16} style={{ padding: 16 }}>
    <Card title="卡片标题" onClick={onClick}>
      基本用法
    </Card>

    <Card title="没有卡片内容" onClick={onClick} />

    <Card onClick={onClick}>没有卡片标题</Card>

    <Card
      title={<div style={{ fontWeight: 'normal' }}>自定义卡片内容</div>}
      extra={<ArrowForward />}
      onBodyClick={onBodyClick}
      onHeaderClick={onHeaderClick}
      style={{ borderRadius: '16px' }}
    >
      <div>卡片内容</div>
      <WhiteSpace />
      <Divider />
      <WhiteSpace />
      <Space onClick={(e) => e.stopPropagation()} horizontalAlign="end">
        <Button variant="contained" color="primary">
          底部按钮
        </Button>
        <Button variant="contained" color="primary">
          底部按钮
        </Button>
      </Space>
    </Card>

    <GlobalStyles
      styles={{
        '.WuiCard-root': {
          '&&.my-card-root': {
            background: 'grey',
            color: '#fff'
          },
          '&& .my-card-title': {
            fontSize: 18,
            color: 'blue'
          }
        }
      }}
    />
    <Card
      title="自定义卡片样式"
      classes={{
        root: 'my-card-root',
        title: 'my-card-title'
      }}
    >
      卡片内容
    </Card>
  </Space>
);
