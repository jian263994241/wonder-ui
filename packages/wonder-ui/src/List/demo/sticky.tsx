/**
 * title: 固定的副标题列表
 * desc: 此性能由 CSS sticky 位置实现, 可以通过`disableSticky`禁用此选项
 * background: '#f5f5f5'
 */
import {
  Page,
  List,
  ListItem,
  ListHeader,
  ListItemText
} from '@wonder-ui/core';

const dataList = Array(10).fill('');

export default () => (
  <Page title="Sticky">
    <List>
      <ListHeader sticky>sticky 0</ListHeader>
      {dataList.map((item, index) => (
        <ListItem key={index}>
          <ListItemText>Item {index}</ListItemText>
        </ListItem>
      ))}
    </List>
    <List>
      <ListHeader sticky>sticky 1</ListHeader>
      {dataList.map((item, index) => (
        <ListItem key={index}>
          <ListItemText>Item {index}</ListItemText>
        </ListItem>
      ))}
    </List>
    <List>
      <ListHeader sticky>sticky 2</ListHeader>
      {dataList.map((item, index) => (
        <ListItem key={index}>
          <ListItemText>Item {index}</ListItemText>
        </ListItem>
      ))}
    </List>
  </Page>
);
