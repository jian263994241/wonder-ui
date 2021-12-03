import { CheckList, CheckListItem, ListHeader } from '@wonder-ui/core';

export default () => (
  <div>
    <CheckList disabled defaultValue={['A']}>
      <ListHeader>整组禁用</ListHeader>
      <CheckListItem value="A">A</CheckListItem>
      <CheckListItem value="B">B</CheckListItem>
      <CheckListItem value="C">C</CheckListItem>
    </CheckList>

    <CheckList defaultValue={['A']}>
      <ListHeader>局部禁用</ListHeader>
      <CheckListItem value="A">A</CheckListItem>
      <CheckListItem value="B" disabled>
        B
      </CheckListItem>
      <CheckListItem value="C">C</CheckListItem>
    </CheckList>

    <CheckList readOnly defaultValue={['A']}>
      <ListHeader>整组只读</ListHeader>
      <CheckListItem value="A">A</CheckListItem>
      <CheckListItem value="B">B</CheckListItem>
      <CheckListItem value="C">C</CheckListItem>
    </CheckList>

    <CheckList multiple defaultValue={['A']}>
      <ListHeader>局部只读</ListHeader>
      <CheckListItem value="A" readOnly>
        A
      </CheckListItem>
      <CheckListItem value="B">B</CheckListItem>
      <CheckListItem value="C">C</CheckListItem>
    </CheckList>
  </div>
);
