import {
  Button,
  DropdownMenu,
  DropdownMenuItem,
  Page,
  Form,
  FormItem,
  Toggle,
  CheckList,
  CheckListItem
} from '@wonder-ui/core';

export default () => (
  <Page title="Auto width">
    <DropdownMenu widthAuto>
      <DropdownMenuItem
        arrow
        overlay={
          <CheckList>
            <CheckListItem value="0">全部商品</CheckListItem>
            <CheckListItem value="1">新款商品</CheckListItem>
            <CheckListItem value="2">活动商品</CheckListItem>
          </CheckList>
        }
      >
        全部商品
      </DropdownMenuItem>
      <DropdownMenuItem
        arrow
        overlay={({ onClose }) => (
          <Form
            onFinish={() => {
              onClose();
            }}
            footer={
              <Button variant="contained" fullWidth type="submit">
                确 认
              </Button>
            }
          >
            <FormItem label="包邮" name="type1" childAlign="right">
              <Toggle />
            </FormItem>
            <FormItem
              label="团购"
              name="type2"
              initialValue={true}
              childAlign="right"
            >
              <Toggle />
            </FormItem>
          </Form>
        )}
      >
        好评排序
      </DropdownMenuItem>

      <DropdownMenuItem>销量</DropdownMenuItem>
      <DropdownMenuItem>口碑</DropdownMenuItem>
    </DropdownMenu>
  </Page>
);
