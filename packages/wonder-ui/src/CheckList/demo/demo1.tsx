import { CheckList, CheckListItem, ListHeader } from '@wonder-ui/core';

export default () => (
  <CheckList defaultValue={['B']}>
    <ListHeader>基础用法</ListHeader>
    <CheckListItem value="A">A</CheckListItem>
    <CheckListItem value="B">B</CheckListItem>
    <CheckListItem value="C">C</CheckListItem>
  </CheckList>
);
