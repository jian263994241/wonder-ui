/**
 * title: 基础用法
 * desc: 使用`overlay`自定义内容
 * background: '#f5f5f5'
 */

/** @jsx jsx */
import {
  jsx,
  Button,
  Container,
  Divider,
  DropdownMenu,
  DropdownMenuItem,
  List,
  ListItem,
  ListItemText,
  ListItemExtra,
  Toggle
} from '@wonder-ui/core';

export default function Example() {
  return (
    <Container size="sm">
      <DropdownMenu>
        <DropdownMenuItem
          overlay={
            <div>
              <List>
                <ListItem divider>
                  <ListItemText>全部商品</ListItemText>
                </ListItem>
                <ListItem divider>
                  <ListItemText>新款商品</ListItemText>
                </ListItem>
                <ListItem divider>
                  <ListItemText>活动商品</ListItemText>
                </ListItem>
              </List>
            </div>
          }
        >
          全部商品
        </DropdownMenuItem>
        <DropdownMenuItem
          overlay={
            <div>
              <List>
                <ListItem divider>
                  <ListItemText>包邮</ListItemText>
                  <ListItemExtra>
                    <Toggle />
                  </ListItemExtra>
                </ListItem>
                <ListItem>
                  <ListItemText>团购</ListItemText>
                  <ListItemExtra>
                    <Toggle defaultChecked />
                  </ListItemExtra>
                </ListItem>
              </List>
              <Divider />
              <div style={{ padding: 16 }}>
                <Button variant="contained" fullWidth disableFocusRipple>
                  确 认
                </Button>
              </div>
            </div>
          }
        >
          好评排序
        </DropdownMenuItem>
      </DropdownMenu>
    </Container>
  );
}
