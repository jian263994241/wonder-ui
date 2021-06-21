/**
 * title: 基础用法
 * background: '#f5f5f5'
 */
import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemExtra,
  Stepper
} from '@wonder-ui/core';

export default () => (
  <Container size="sm">
    <List>
      <ListItem divider>
        <ListItemText>默认</ListItemText>
        <ListItemExtra>
          <Stepper />
        </ListItemExtra>
      </ListItem>
      <ListItem divider>
        <ListItemText>步长设置</ListItemText>
        <ListItemExtra>
          <Stepper step={3} />
        </ListItemExtra>
      </ListItem>
      <ListItem divider>
        <ListItemText>限制输入范围</ListItemText>
        <ListItemExtra>
          <Stepper min={1} max={8} />
        </ListItemExtra>
      </ListItem>
      <ListItem divider>
        <ListItemText>限制输入整数</ListItemText>
        <ListItemExtra>
          <Stepper step={1} min={1} />
        </ListItemExtra>
      </ListItem>
      <ListItem divider>
        <ListItemText>禁用状态</ListItemText>
        <ListItemExtra>
          <Stepper disabled />
        </ListItemExtra>
      </ListItem>
      <ListItem divider>
        <ListItemText>禁用输入框</ListItemText>
        <ListItemExtra>
          <Stepper disableInput />
        </ListItemExtra>
      </ListItem>
      <ListItem divider>
        <ListItemText>固定小数位数</ListItemText>
        <ListItemExtra>
          <Stepper step={0.1} min={1} />
        </ListItemExtra>
      </ListItem>
      <ListItem divider>
        <ListItemText>隐藏输入框</ListItemText>
        <ListItemExtra>
          <Stepper hideInput />
        </ListItemExtra>
      </ListItem>
    </List>
  </Container>
);
