import * as React from 'react';
import {
  TabContext,
  TabPane,
  Tabs,
  Tab,
  Sticky,
  styled
} from '@wonder-ui/core';

const Block = styled('div')`
  padding: 16px;
`;

export default () => {
  const [value, setValue] = React.useState(0);

  return (
    <React.Fragment>
      <Sticky>
        <Tabs
          showIndicator
          onChange={(a) => {
            setValue(a);
          }}
        >
          <Tab label="标签 1" />
          <Tab label="标签 2" />
          <Tab label="标签 3" />
        </Tabs>
      </Sticky>

      <TabContext value={value}>
        <TabPane value={0}>
          <Block>Content of Tab Pane 1</Block>
        </TabPane>
        <TabPane value={1}>
          <Block>Content of Tab Pane 2</Block>
        </TabPane>
        <TabPane value={2}>
          <Block>Content of Tab Pane 3</Block>
        </TabPane>
      </TabContext>
    </React.Fragment>
  );
};
