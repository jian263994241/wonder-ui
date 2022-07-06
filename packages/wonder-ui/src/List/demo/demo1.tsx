import {
  List,
  ListItem,
  ListHeader,
  WhiteSpace,
  Toggle
} from '@wonder-ui/core';
import { BoxArrowUp, ListCheck } from '@wonder-ui/icons';

export default () => (
  <List>
    <ListHeader>基础用法</ListHeader>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>

    <ListHeader>可点击列表</ListHeader>
    <ListItem arrow="horizontal" prefix={<ListCheck />}>
      我的待办
    </ListItem>
    <ListItem arrow="horizontal" prefix={<BoxArrowUp />}>
      与我分享
    </ListItem>

    <ListHeader>复杂列表</ListHeader>
    <ListItem extra={<Toggle />}>通知开关</ListItem>
    <ListItem extra="未开启" arrow="horizontal">
      开启模式
    </ListItem>
    <WhiteSpace />
    <ListItem
      arrow="horizontal"
      primary="授权管理"
      secondary="管理已授权的产品和设备"
    />

    <ListHeader>禁用状态</ListHeader>
    <ListItem disabled extra="未开启" arrow="horizontal">
      开启模式
    </ListItem>
    <ListItem
      disabled
      arrow="horizontal"
      primary="授权管理"
      secondary="管理已授权的产品和设备"
    />
  </List>
);
