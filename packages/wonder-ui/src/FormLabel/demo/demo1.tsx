import { FormLabel, List, ListItem, ListHeader } from '@wonder-ui/core';

export default () => (
  <List>
    <ListHeader>星号</ListHeader>
    <ListItem>
      <FormLabel required>姓名</FormLabel>
    </ListItem>
    <ListItem>
      <FormLabel help="详情地址">地址</FormLabel>
    </ListItem>
    <ListItem>
      <FormLabel required help="详情地址" colon>
        地址
      </FormLabel>
    </ListItem>

    <ListHeader>文字-必填</ListHeader>
    <ListItem>
      <FormLabel required requiredMark requiredMarkType="text-required">
        姓名
      </FormLabel>
    </ListItem>
    <ListItem>
      <FormLabel help="详情地址" requiredMarkType="text-required">
        地址
      </FormLabel>
    </ListItem>
    <ListItem>
      <FormLabel
        required
        help="详情地址"
        requiredMarkType="text-required"
        colon
      >
        地址
      </FormLabel>
    </ListItem>

    <ListHeader>文字-选填</ListHeader>
    <ListItem>
      <FormLabel required requiredMark requiredMarkType="text-optional">
        姓名
      </FormLabel>
    </ListItem>
    <ListItem>
      <FormLabel help="详情地址" requiredMarkType="text-optional">
        地址
      </FormLabel>
    </ListItem>
    <ListItem>
      <FormLabel
        required
        help="详情地址"
        requiredMarkType="text-optional"
        colon
      >
        地址
      </FormLabel>
    </ListItem>
  </List>
);
