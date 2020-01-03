import React from 'react';
import { Page, List, Form, InputItem, InputBase } from '@wonder-ui/core';

export default Form.create()(function FormExamples(props) {
  const { form } = props;
  const { getFieldDecorator } = form;

  return (
    <Page name="Form" navbar >
      <List renderHeader={()=>'基本'}>

      </List>
      <InputBase type="search"/>
    </Page>
  )
})