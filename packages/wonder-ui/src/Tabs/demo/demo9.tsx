import { Tabs, Tab, Space, Typography } from '@wonder-ui/core';
import { House, ListTask, Chat, Person } from '@wonder-ui/icons';

const tabs = [
  {
    key: 'home',
    label: '首页',
    icon: <House />,
    badge: true
  },
  {
    key: 'todo',
    label: '待办',
    icon: <ListTask />,
    badge: '5'
  },
  {
    key: 'message',
    label: '消息',
    icon: <Chat />,
    badge: '99+'
  },
  {
    key: 'personalCenter',
    label: '我',
    icon: <Person />
  }
];

const Title = (props: any) => (
  <Typography style={{ paddingLeft: 8 }} variant="body2">
    {props.children}
  </Typography>
);

export default () => (
  <Space direction="vertical" gap="medium">
    <Title>图标和文字</Title>
    <Tabs>
      {tabs.map((item, index) => (
        <Tab
          key={index}
          badge={item.badge}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </Tabs>

    <Title>仅图标</Title>
    <Tabs>
      {tabs.map((item, index) => (
        <Tab key={index} badge={item.badge} icon={item.icon} />
      ))}
    </Tabs>

    <Title>仅文字</Title>
    <Tabs>
      {tabs.map((item, index) => (
        <Tab key={index} badge={item.badge} label={item.label} />
      ))}
    </Tabs>
  </Space>
);
