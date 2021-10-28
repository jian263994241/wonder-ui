import { TabBar, TabBarItem, Space, Typography } from '@wonder-ui/core';
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
    <Title>基本用法</Title>
    <TabBar>
      {tabs.map((item, index) => (
        <TabBarItem
          key={index}
          itemKey={item.key}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </TabBar>

    <Title>徽标</Title>
    <TabBar>
      {tabs.map((item, index) => (
        <TabBarItem
          key={index}
          itemKey={item.key}
          label={item.label}
          icon={item.icon}
          badge={item.badge}
        />
      ))}
    </TabBar>

    <Title>仅图标</Title>
    <TabBar>
      {tabs.map((item, index) => (
        <TabBarItem key={index} itemKey={item.key} icon={item.icon} />
      ))}
    </TabBar>

    <Title>仅文字</Title>
    <TabBar>
      {tabs.map((item, index) => (
        <TabBarItem key={index} itemKey={item.key} label={item.label} />
      ))}
    </TabBar>

    <Title>文字和指示器</Title>
    <TabBar showIndicator>
      {tabs.map((item, index) => (
        <TabBarItem key={index} itemKey={item.key} label={item.label} />
      ))}
    </TabBar>
  </Space>
);
