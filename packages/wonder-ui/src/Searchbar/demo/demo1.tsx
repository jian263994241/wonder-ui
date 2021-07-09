/**
 * title: 基本的搜索框
 * desc:
 *
 */
import { Page, Searchbar, Space, WhiteSpace } from '@wonder-ui/core';
import * as React from 'react';

export default () => {
  const [value, setValue] = React.useState('');

  return (
    <Page
      title="搜索"
      NavbarProps={{
        children: (
          <Searchbar
            placeholder="请输入搜索关键字"
            allowCancel
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onCencel={() => {
              setValue('');
            }}
          />
        )
      }}
    >
      <WhiteSpace />
      <Space direction="vertical">基本使用:</Space>
    </Page>
  );
};
