import * as React from 'react';
import {
  Button,
  Drawer,
  Page,
  Searchbar,
  Typography,
  Space
} from '@wonder-ui/core';
import { Search } from '@wonder-ui/icons';

export default () => {
  const [DrawerVisible, setDrawerVisible] = React.useState(false);

  return (
    <Page
      navbar={
        <Searchbar
          style={{ position: 'absolute', top: 0 }}
          icon={
            <Space style={{ color: '#777' }} gap={3} verticalAlign="center">
              地址
              <Search style={{ fontSize: '0.8rem' }} />
            </Space>
          }
          placeholder="请输入地址"
          barRight={
            <Button
              style={{ whiteSpace: 'nowrap', marginRight: -12 }}
              onClick={() => {
                setDrawerVisible(true);
              }}
            >
              筛选
            </Button>
          }
        />
      }
    >
      <Typography style={{ padding: 12 }}>点击筛选展开面板</Typography>
      <Drawer
        anchor="right"
        visible={DrawerVisible}
        onClose={() => {
          setDrawerVisible(false);
        }}
      >
        <Page title="筛选" style={{ width: 200 }}>
          筛选面板
        </Page>
      </Drawer>
    </Page>
  );
};
