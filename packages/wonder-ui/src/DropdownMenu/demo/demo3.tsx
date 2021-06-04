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
  Radio,
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
          arrow
          autoWidth
          overlay={
            <div>
              <List component="div">
                <ListItem divider component="label">
                  <ListItemText>全部商品</ListItemText>
                  <ListItemExtra>
                    <Radio name="DropdownMenu1" />
                  </ListItemExtra>
                </ListItem>
                <ListItem divider component="label">
                  <ListItemText>新款商品</ListItemText>
                  <ListItemExtra>
                    <Radio name="DropdownMenu1" />
                  </ListItemExtra>
                </ListItem>
                <ListItem divider component="label">
                  <ListItemText>活动商品</ListItemText>
                  <ListItemExtra>
                    <Radio name="DropdownMenu1" />
                  </ListItemExtra>
                </ListItem>
              </List>
            </div>
          }
        >
          全部商品
        </DropdownMenuItem>
        <DropdownMenuItem
          arrow
          autoWidth
          overlay={({ onClose }) => (
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
                <Button
                  variant="contained"
                  fullWidth
                  disableFocusRipple
                  onClick={onClose}
                >
                  确 认
                </Button>
              </div>
            </div>
          )}
        >
          好评排序
        </DropdownMenuItem>

        <DropdownMenuItem autoWidth>销量</DropdownMenuItem>
        <DropdownMenuItem autoWidth>口碑</DropdownMenuItem>
      </DropdownMenu>
    </Container>
  );
}