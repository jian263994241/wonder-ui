/**
 * title: 基础选项卡
 * desc: 使用`TabPane`切换内容
 *
 */
import * as React from 'react';
import {
  TabContext,
  TabPane,
  Button,
  ButtonGroup,
  WhiteSpace
} from '@wonder-ui/core';

// import Tab from '../Tab';
// import Tabs from '../Tabs';

export default () => {
  const [value, setValue] = React.useState(1);

  return (
    <div>
      <ButtonGroup>
        <Button onClick={() => setValue(1)} checked={value === 1}>
          Item 1
        </Button>
        <Button onClick={() => setValue(2)} checked={value === 2}>
          Item 2
        </Button>
        <Button onClick={() => setValue(3)} checked={value === 3}>
          Item 3
        </Button>
      </ButtonGroup>
      <WhiteSpace />
      <TabContext value={value}>
        <TabPane value={1}>Content of Tab Pane 1</TabPane>
        <TabPane value={2}>Content of Tab Pane 2</TabPane>
        <TabPane value={3}>Content of Tab Pane 3</TabPane>
      </TabContext>
    </div>
  );
};
