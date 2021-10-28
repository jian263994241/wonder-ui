import { TabBar, TabBarItem } from '@wonder-ui/core';

export default () => (
  <TabBar showIndicator>
    <TabBarItem itemKey="one" label="标签" />
    <TabBarItem itemKey="two" label="标签禁用" disabled />
    <TabBarItem itemKey="three" label="标签" />
  </TabBar>
);
