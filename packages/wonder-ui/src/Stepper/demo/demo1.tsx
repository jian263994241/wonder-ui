import { List, ListItem, ListItemText, Page, Stepper } from '@wonder-ui/core';

export default () => (
  <Page title="Stepper">
    <List>
      <ListItem divider extra={<Stepper />}>
        <ListItemText>默认</ListItemText>
      </ListItem>
      <ListItem divider extra={<Stepper step={3} />}>
        <ListItemText>步长设置</ListItemText>
      </ListItem>
      <ListItem divider extra={<Stepper min={1} max={8} />}>
        <ListItemText>限制输入范围</ListItemText>
      </ListItem>
      <ListItem divider extra={<Stepper step={1} min={1} />}>
        <ListItemText>限制输入整数</ListItemText>
      </ListItem>
      <ListItem divider extra={<Stepper disabled />}>
        <ListItemText>禁用状态</ListItemText>
      </ListItem>
      <ListItem divider extra={<Stepper disableInput />}>
        <ListItemText>禁用输入框</ListItemText>
      </ListItem>
      <ListItem divider extra={<Stepper step={0.1} min={1} />}>
        <ListItemText>固定小数位数</ListItemText>
      </ListItem>
      <ListItem extra={<Stepper hideInput />}>
        <ListItemText>隐藏输入框</ListItemText>
      </ListItem>
    </List>
  </Page>
);
