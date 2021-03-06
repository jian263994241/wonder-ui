

```jsx
import React from 'react';
import { Page, CheckableTag, CheckableTagGroup, ContentBlock, Tag, Form, FormItem } from '@wonder-ui/core';

const TagExamples = function (props) {
  const { form } = props;

  return (
    <Page name="Tag" navbar>

      <ContentBlock header="Tag Preset Color">
        <Tag color="primary">primary</Tag>
        <Tag color="secondary">secondary</Tag>
      </ContentBlock>

      <ContentBlock header="Tag Custom Color">
        <Tag color="#FE9E20">#5576F0</Tag>
        <Tag color="#FD561F">#FD561F</Tag>
        <Tag color="#3981DA">#3981DA</Tag>
      </ContentBlock>

      <ContentBlock header="CheckableTag disabled">
        <CheckableTag checked disabled>checked disabled</CheckableTag>
        <CheckableTag disabled>disabled</CheckableTag>
      </ContentBlock>

      <Form>

        <ContentBlock header="CheckableTag">
          <FormItem name="isChecked" initialValue={true} valuePropName="checked">
            <CheckableTag>CheckableTag default checked</CheckableTag>
          </FormItem>
        </ContentBlock>

        <ContentBlock header="CheckableTagGroup">
          <span>多选: </span>
          <FormItem name="group">
            <CheckableTagGroup
                data={[
                  {label: '公司', value: '0'},
                  {label: '个人', value: '1'},
                ]}
              />
          </FormItem>
        </ContentBlock>

        <ContentBlock header="CheckableTagGroup Exclusive">
          <span>单选: </span>
          <FormItem name="group2" initialValue="0">
            <CheckableTagGroup
                exclusive
                data={[
                  {label: '公司', value: '0'},
                  {label: '个人', value: '1'},
                ]}
              />
          </FormItem>
        </ContentBlock>
      </Form>
    </Page>
  )
};

<TagExamples/>
```


Wonder UI 还提供一种类似checkbox的标签样式

- [CheckableTag 可选标签](./#/组件/数据录入/CheckableTag)
- [CheckableTagGroup 可选标签组](./#/组件/数据录入/CheckableTagGroup)
