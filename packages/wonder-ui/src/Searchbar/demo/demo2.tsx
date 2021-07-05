/**
 * title: 按钮和图标
 * desc:
 *
 */
import {
  Page,
  Searchbar,
  WhiteSpace,
  Button,
  Space,
  Drawer
} from '@wonder-ui/core';
import { Person } from '@wonder-ui/icons';
import * as React from 'react';

export default () => {
  const [DrawerVisible, setDrawerVisible] = React.useState(false);

  return (
    <Page
      title="搜索"
      NavbarProps={{
        children: (
          <Searchbar
            icon={<Person />}
            placeholder="请输入名字"
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
        )
      }}
    >
      <WhiteSpace />
      <Space direction="vertical">按钮和图标:</Space>

      <Drawer
        anchor="right"
        visible={DrawerVisible}
        onClose={() => {
          setDrawerVisible(false);
        }}
      >
        <Page title="筛选" style={{ width: 200 }}>
          12313
        </Page>
      </Drawer>
    </Page>
  );
};
