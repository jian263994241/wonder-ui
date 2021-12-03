import { CheckList, CheckListItem, ListHeader } from '@wonder-ui/core';

export default () => (
  <CheckList multiple defaultValue={['B', 'C']}>
    <ListHeader>多选</ListHeader>
    <CheckListItem value="A">A</CheckListItem>
    <CheckListItem value="B">B</CheckListItem>
    <CheckListItem value="C">C</CheckListItem>
  </CheckList>
);
