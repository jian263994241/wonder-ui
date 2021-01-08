import React from 'react';
import {
  Page,
  CheckableTag,
  CheckableTagGroup,
  ContentBlock,
  Tag,
  Form,
  FormItem,
} from '@wonder-ui/core';

export default (function TagExamples(props) {
  return (
    <Page name="Tag" navbar>
      <Form>
        <ContentBlock header="Tag Preset Color">
          <Tag color="primary">primary</Tag>
          <Tag color="secondary">secondary</Tag>
        </ContentBlock>

        <ContentBlock header="Tag Custom Color">
          <Tag color="#FE9E20">#5576F0</Tag>
          <Tag color="#FD561F">#FD561F</Tag>
          <Tag color="#3981DA">#3981DA</Tag>
        </ContentBlock>

        <ContentBlock header="Size">
          <Tag color="#FE9E20" size="small">
            #5576F0
          </Tag>
          <Tag color="#FD561F">#FD561F</Tag>
          <Tag color="#3981DA" size="large">
            #3981DA
          </Tag>
        </ContentBlock>

        <ContentBlock header="细边框">
          <Tag color="#FD561F" hairline>
            #FD561F
          </Tag>
        </ContentBlock>

        <ContentBlock header="CheckableTag disabled">
          <CheckableTag checked disabled>
            checked disabled
          </CheckableTag>
          <CheckableTag disabled>disabled</CheckableTag>
        </ContentBlock>

        <ContentBlock header="CheckableTag">
          <FormItem
            name="isChecked"
            initialValue={true}
            valuePropName="checked"
          >
            <CheckableTag>CheckableTag default checked</CheckableTag>
          </FormItem>
        </ContentBlock>

        <ContentBlock header="CheckableTagGroup">
          <span>多选: </span>
          <FormItem name="group">
            <CheckableTagGroup
              data={[
                { label: '公司', value: '0' },
                { label: '个人', value: '1' },
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
                { label: '公司', value: '0' },
                { label: '个人', value: '1' },
              ]}
            />
          </FormItem>
        </ContentBlock>
      </Form>
    </Page>
  );
});
