/**
 * title: 定义内容
 * desc: 使用`overlay`自定义内容
 * background: '#f5f5f5'
 */
import {
  Button,
  Divider,
  DropdownMenu,
  DropdownMenuItem,
  Page,
  Radio,
  List,
  ListItem,
  ListItemText,
  ListItemExtra,
  Toggle
} from '@wonder-ui/core';

export default () => (
  <Page title="With list">
    <DropdownMenu>
      <DropdownMenuItem
        arrow
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
    </DropdownMenu>
  </Page>
);
