import { ContentBlock, PickerView } from '@wonder-ui/core';
import { columns_1, columns_2, columns_3, columns_4 } from './data';

export default () => (
  <>
    <ContentBlock title="基本使用">
      <PickerView
        columns={columns_1}
        onChange={(values) => {
          console.log(values);
        }}
      />
    </ContentBlock>

    <ContentBlock title="多列选择">
      <PickerView
        columns={columns_2}
        onChange={(values) => {
          console.log(values);
        }}
      />
    </ContentBlock>

    <ContentBlock title="级联选择">
      <PickerView
        columns={columns_3}
        fieldNames={{ label: 'text' }}
        onChange={(values) => {
          console.log(values);
        }}
      />
    </ContentBlock>

    <ContentBlock title="禁用选项">
      <PickerView
        columns={columns_4}
        onChange={(values) => {
          console.log(values);
        }}
      />
    </ContentBlock>

    <ContentBlock title="加载状态">
      <PickerView columns={[]} loading />
    </ContentBlock>
  </>
);
