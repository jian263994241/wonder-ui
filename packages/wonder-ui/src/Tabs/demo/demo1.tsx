/**
 * title: 基础选项卡
 * desc: 使用`TabPane`切换内容
 *
 */
import * as React from 'react';
import {
  TabContext,
  TabPane,
  Typography,
  Divider,
  Tab,
  Tabs,
  styled
} from '@wonder-ui/core';

const Content = styled('div')`
  padding: 16px;
`;

export default () => {
  const [value, setValue] = React.useState(1);

  return (
    <TabContext value={value}>
      <Tabs>
        <Tab>Item-1</Tab>
        <Tab>Item-2</Tab>
        <Tab>Item-3</Tab>
      </Tabs>
      <Divider />

      <TabPane value={1}>
        <Content>
          <Typography>Content of Tab Pane 1</Typography>
        </Content>
      </TabPane>
      <TabPane value={2}>
        <Content>
          <Typography>Content of Tab Pane 2</Typography>
        </Content>
      </TabPane>
      <TabPane value={3}>
        <Content>
          <Typography>Content of Tab Pane 3</Typography>
        </Content>
      </TabPane>
    </TabContext>
  );
};
