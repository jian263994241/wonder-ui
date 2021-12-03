import { CheckList, CheckListItem, ListHeader } from '@wonder-ui/core';
import { EmojiDizzyFill } from '@wonder-ui/icons';

export default () => (
  <CheckList
    defaultValue={['B']}
    activeIcon={<EmojiDizzyFill color="primary" fontSize="medium" />}
  >
    <ListHeader>自定义选中图标</ListHeader>
    <CheckListItem value="A">A</CheckListItem>
    <CheckListItem value="B">B</CheckListItem>
    <CheckListItem value="C">C</CheckListItem>
  </CheckList>
);
