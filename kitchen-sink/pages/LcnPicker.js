import React from 'react';
import { Page, Button, LcnPicker, ContentBlock, Form } from '@wonder-ui/core';


const ExtraButton = React.forwardRef((props, ref) => {
  const {extra='请选择', ...rest} = props;

  return (
    <Button ref={ref} {...rest}>{extra}</Button>
  )
})



export default Form.create()(function PickerExamples(props) {
  const { form } = props;
  return (
    <Page name="LcnPicker" navbar>
      <ContentBlock header={<span>LcnPicker & Button</span>}>
        {
          form.getFieldDecorator('group', {

          })(
            <LcnPicker><ExtraButton/></LcnPicker>
          )
        }
      </ContentBlock>
    </Page>
  )
})