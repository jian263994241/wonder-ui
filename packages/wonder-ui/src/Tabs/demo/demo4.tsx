import { Tabs, Tab } from '@wonder-ui/core';

export default () => (
  <Tabs showIndicator>
    <Tab label="标签" />
    <Tab label="标签禁用" disabled />
    <Tab label="标签" />
  </Tabs>
);
