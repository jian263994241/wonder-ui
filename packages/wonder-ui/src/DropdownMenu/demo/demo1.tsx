import { DropdownMenu, DropdownMenuItem, Page, Space } from '@wonder-ui/core';

export default () => (
  <Page title="DropdownMenu">
    <Space direction="vertical">
      基本使用
      <DropdownMenu>
        <DropdownMenuItem arrow overlay={<div>全部商品 ... </div>}>
          全部商品
        </DropdownMenuItem>
        <DropdownMenuItem arrow overlay={<div>好评排序 ...</div>}>
          好评排序
        </DropdownMenuItem>
      </DropdownMenu>
    </Space>
  </Page>
);
