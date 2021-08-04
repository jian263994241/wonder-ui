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
  Toggle
} from '@wonder-ui/core';

export default () => (
  <Page title="Auto width">
    <DropdownMenu widthAuto>
      <DropdownMenuItem
        arrow
        overlay={
          <div>
            <List component="div">
              <ListItem
                divider
                component="label"
                extra={<Radio name="DropdownMenu1" />}
              >
                <ListItemText>全部商品</ListItemText>
              </ListItem>
              <ListItem
                divider
                component="label"
                extra={<Radio name="DropdownMenu1" />}
              >
                <ListItemText>新款商品</ListItemText>
              </ListItem>
              <ListItem
                divider
                component="label"
                extra={<Radio name="DropdownMenu1" />}
              >
                <ListItemText>活动商品</ListItemText>
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
              <ListItem divider extra={<Toggle />}>
                <ListItemText>包邮</ListItemText>
              </ListItem>
              <ListItem extra={<Toggle defaultChecked />}>
                <ListItemText>团购</ListItemText>
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

      <DropdownMenuItem>销量</DropdownMenuItem>
      <DropdownMenuItem>口碑</DropdownMenuItem>
    </DropdownMenu>
  </Page>
);
