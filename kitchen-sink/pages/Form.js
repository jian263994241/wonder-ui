import React from 'react';
import { Page, List, Form, InputItem } from '@wonder-ui/core';

export default Form.create()(function FormExamples(props) {
  const { form } = props;
  const { getFieldDecorator } = form;

  return (
    <Page name="Form" navbar >
      <List renderHeader={()=>'基本'}>
        <InputItem placeholder="Base input" value={2}>标题</InputItem>
        <InputItem extra="%" alignRight type="number">标题</InputItem>
      </List>
    </Page>
  )
})