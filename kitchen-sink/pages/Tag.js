import React from 'react';
import { Page, CheckableTag, CheckableTagGroup, ContentBlock, Tag, Form } from '@wonder-ui/core';

export default Form.create()(function TagExamples(props) {
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

      <ContentBlock header="CheckableTag">  
        {
          form.getFieldDecorator('isChecked', {
            initialValue:  true,
            valuePropName: 'checked'
          })(
            <CheckableTag>CheckableTag default checked</CheckableTag>
          )
        }
      </ContentBlock>

      <ContentBlock header="CheckableTagGroup">  
        <span>多选: </span>
        {
          form.getFieldDecorator('group', {
            initialValue: [],
          })(
            <CheckableTagGroup 
              data={[
                {label: '公司', value: '0'},
                {label: '个人', value: '1'},
              ]}
            />
          )
        }
      </ContentBlock>

      <ContentBlock header="CheckableTagGroup Exclusive">  
        <span>单选: </span>
        {
          form.getFieldDecorator('group2', {
            initialValue: '0',
          })(
            <CheckableTagGroup 
              exclusive
              data={[
                {label: '公司', value: '0'},
                {label: '个人', value: '1'},
              ]}
            />
          )
        }
      </ContentBlock>

    </Page>
  )
})